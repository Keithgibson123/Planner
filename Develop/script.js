	
	//calling in moment.js
	var today = moment();
	


  // Display the current date and time on the paragraph with an id of "currentDay"
 $('#currentDay').text(today.format('LLLL')); // this is going to show day of the week, date and time


//  this is adding a event listener so you can save
    $('.saveBtn').on('click', function () {
    var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');

  // save in local storage
    localStorage.setItem(timeKey, textValue);
}); 

		$("#6 .description").val(localStorage.getItem("6"));
	    $("#7 .description").val(localStorage.getItem("7"));
	    $("#8 .description").val(localStorage.getItem("8"));
	    $("#9 .description").val(localStorage.getItem("9"));
	    $("#10 .description").val(localStorage.getItem("10"));
	    $("#11 .description").val(localStorage.getItem("11"));
	    $("#12 .description").val(localStorage.getItem("12"));
	    $("#13 .description").val(localStorage.getItem("13"));
	    $("#14 .description").val(localStorage.getItem("14"));
	    $("#15 .description").val(localStorage.getItem("15"));
	    $("#16 .description").val(localStorage.getItem("16"));
	    $("#17 .description").val(localStorage.getItem("17"));
	    $("#18 .description").val(localStorage.getItem("18"));
        $("#19 .description").val(localStorage.getItem("19"));
		$("#20 .description").val(localStorage.getItem("20"));




		var currentHour = moment().format('H');
		$(".time-block").each(function() {
			if (parseInt(currentHour) === parseInt(this.id)) {
				$(this).addClass("present");
			} else if (parseInt(currentHour) > parseInt(this.id)) {
				$(this).addClass("past");
			} else {
				$(this).addClass("future");
			}
		})

	

	

	
