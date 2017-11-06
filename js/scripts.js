// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#results").empty();
    var userInput = $("input#userInput").val();
    // console.log(userInput);

    for (var i = 1; i <= userInput; i++) {
      $("ul#results").append("<li>" + pingPong(i) + "</li>");
    }
  });

});


// Business Logic
function pingPong(number) {
  if (number % 15 === 0) {
    return "pingpong";
  } else if (number % 3 === 0) {
    return "ping";
  } else if (number % 5 === 0) {
    return "pong";
  } else {
    return number;
  }
}

// overlay
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav1").style.width = "292.5px";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav1").style.width = "0%";
}



//rules
function openNav1() {
  document.getElementById("myNav").style.width = "292.5px";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav1() {
  document.getElementById("myNav").style.width = "0%";
}
