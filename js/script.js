(function() {
     $("#cart").on("click", function() {
          $(".shopping-cart").fadeToggle("fast");
     });

     $("#checkRate").on("click", function() {
          $(".modal-checkrate").fadeToggle("fast");
     });
     $("#close-checkrate").on("click", function() {
          $(".modal-checkrate").fadeToggle("fast");
     });

     $("#contactus").on("click", function() {
          $(".modal-contactus").fadeToggle("fast");
     });
     $("#close-contactus").on("click", function() {
          $(".modal-contactus").fadeToggle("fast");
     });

     $("#signin").on("click", function() {
          $(".modal-signin").fadeToggle("fast");
     });
     $("#signup").on("click", function() {
          $(".modal-signup").fadeToggle("fast");
          $(".modal-signin").fadeToggle("fast");
     });
     $("#temp").on("click", function() {
          $(".modal-signup").fadeToggle("fast");
          $(".modal-signin").fadeToggle("fast");
     });

     $("#close-signin").on("click", function() {
          $(".modal-signin").fadeToggle("fast");
     });
     $("#close-signup").on("click", function() {
          $(".modal-signup").fadeToggle("fast");
     });
})();