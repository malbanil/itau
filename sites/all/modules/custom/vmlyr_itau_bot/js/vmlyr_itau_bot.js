(function ($) {
  Drupal.behaviors.chat = {
    attach: function (context, settings) {
      $("#send-message").once().click(function(event){
        event.preventDefault();
        var message = $("#text-message").val();
        if (message != ''){
          $("#text-message").val("");
          $( "#list-chat" ).append("<li>" + message + "</li>");
          $( "#list-chat" ).append('<li id="text-moment">Escribiendo...</li>');
          $.ajax({
            type: "POST",
            url: "chat-ajax",
            data:{ text: message}, 
            success: function( data ) {
              if (data.success == true){
                $( "#text-moment" ).remove();
                $( "#list-chat" ).append("<li>" + data.response + "</li>");
              }
            }
          });
        }
      });
    }
  };
})(jQuery);