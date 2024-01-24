// Wait for the document to finish loading before running the code
$(document).ready(function () {
  // Initialize a variable to keep track of whether the navigation is expanded or not
  var expanded = false;

  // Apply initial CSS changes when the page loads
  if ($(window).scrollTop() === 0) {
    $(".logo").hide();
    $(".right").show();

    if ($(".logo").is(":hidden")) {
      $(".nav").css("background", "");
    }
  }

  // Toggle the nav image and the content when the user scrolls down
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      // Show the nav image and slide up the content
      $(".logo").show();
      $(".right").slideUp({
        duration: 500,
        easing: "linear",
        complete: function () {
          if (expanded) {
            $(".nav-img").removeClass("expanded");
            expanded = false;
          }
          //applies new style if the right of the nav bar is hidden

          if ($(".right").is(":hidden")) {
            $(".nav").css("background", "none");
            $(".nav").css("box-shadow", "none");
          } else {
            $(".nav").css("background", "");
          }
        },
      });
    } else {
      // Hide the nav image and slide down the content
      $(".logo").hide();
      $(".right").slideDown({
        duration: 500,
        easing: "linear",
        complete: function () {
          if (expanded) {
            $(".logo").removeClass("expanded");
            expanded = false;
          }
          //applies new style if the right of the nav bar is hidden
          if ($(".right").is(":hidden")) {
            $(".nav").css("background", "none");
            $(".nav").css("box-shadow", "none");
          } else {
            $(".nav").css("background", "");
          }
        },
      });
    }
  });

  // Toggle the nav image and the content when the user clicks on the nav image
  $(".logo").click(function () {
    $(".right").slideToggle({
      duration: 500,
      easing: "linear",
      complete: function () {
        $(".logo").toggleClass("expanded");
        expanded = !expanded;
        //applies new style if the right of the nav bar is hidden

        if ($(".right").is(":hidden")) {
          $(".nav").css("background", "none");
          $(".nav").css("box-shadow", "none");
        } else {
          $(".nav").css("background", "");
        }
        //apply the original css style if the user is at the top of the page
        if ($(window).scrollTop() === 0) {
          $(".logo").hide();
          $(".right").show();

          if ($(".logo").is(":hidden")) {
            $(".nav").css("background", "");
          }
        }
      },
    });
  });
});
