document.addEventListener("DOMContentLoaded", function() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redValue = document.getElementById("redValue");
    const greenValue = document.getElementById("greenValue");
    const blueValue = document.getElementById("blueValue");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
    const colorPicker = document.getElementById("colorPicker");

    function updateColor() {
        const r = parseInt(red.value).toString(16).padStart(2, "0");
        const g = parseInt(green.value).toString(16).padStart(2, "0");
        const b = parseInt(blue.value).toString(16).padStart(2, "0");

        const hex = `#${r}${g}${b}`;
        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex;
        colorPicker.value = hex;
    }

    function syncInputWithSlider() { /* H O L A S*/
        redValue.value = red.value;
        greenValue.value = green.value;
        blueValue.value = blue.value;
        updateColor();
    }

    function syncSliderWithInput() {
        red.value = redValue.value;
        green.value = greenValue.value;
        blue.value = blueValue.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        red.value = parseInt(hex.slice(1, 3), 16);
        green.value = parseInt(hex.slice(3, 5), 16);
        blue.value = parseInt(hex.slice(5, 7), 16);
        syncInputWithSlider();
    }

    red.addEventListener("input", syncInputWithSlider);
    green.addEventListener("input", syncInputWithSlider);
    blue.addEventListener("input", syncInputWithSlider);

    redValue.addEventListener("input", syncSliderWithInput);
    greenValue.addEventListener("input", syncSliderWithInput);
    blueValue.addEventListener("input", syncSliderWithInput);

    colorPicker.addEventListener("input", updateFromColorPicker);
});