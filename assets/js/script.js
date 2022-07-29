
  //attempt at a save button
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('class').split('-')[1];
    var value = $(this).siblings(".timeblock").val();
    localStorage.setItem(time, value);
  });



//attempt at current time
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


