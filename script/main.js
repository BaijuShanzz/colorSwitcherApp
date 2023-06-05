// creating a imediatly invoked function expression
(function () {

    // take input field and button
    const colorField = document.querySelector(".color-field");
    const switcher = document.querySelector(".switcher");
  
    // creationg some random color value with the help of Random in-build functio
    function getColorValue() {
        // creating three variable and store three random values
      let red = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      
      // returning the random value;
      return `rgb(${red},${blue},${green})`;
    }
  
    // set a eventlistener to the button click
    switcher.addEventListener("click", function () {
      let color = getColorValue();
      document.body.style.background = color;
      colorField.value = color;
    });
  })();