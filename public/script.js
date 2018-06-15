'use strict';

$(function() {
  $('#survey-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/submit',
      data: $(this).serialize(),
      success: function(data)
      {
        $('body').addClass('submitted');
      },
      failure: function(data) {
        alert('Something has gone wrong! Please wait a few' +
        'minutes and try again');
      }
     });
  });
});