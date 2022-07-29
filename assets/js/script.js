
  //attempt at a save button
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('class').split('-')[1];
    var value = $(this).siblings(".timeblock").val();
    localStorage.setItem(time, value);
  });



//attempt at current time
var currentDay = $("#currentDay");
var datetime = null,
        date = null;
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay');
    update();
    setInterval(update, 1000);
});

//attempt at formulating local storage
localStorage.setItem(key, value);

$('col-10').text(localStorage.getItem('col-10'));


//attempt at for loop for rows and eventual color transistions

var rows = "rows"

for (var i = 0; i < rows.length; i++);