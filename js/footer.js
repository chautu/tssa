(function includeHTML() {
    $('*').each(function() {
      var elmnt = $(this);
      var file = elmnt.attr('include-html');
      
      if (file) {
        $.ajax({
          url: file,
          success: function(response) {
            elmnt.replaceWith(response);
          },
          error: function() {
            elmnt.replaceWith("Page not found.");
          },
          complete: function() {
            elmnt.removeAttr('include-html');
            includeHTML(); // Recursive call
          }
        });
        return false; // Exit the function
      }
    });
  })();