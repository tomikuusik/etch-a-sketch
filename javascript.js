const containerDiv = document.querySelector('#maindiv');
document.querySelector('#resetButton').addEventListener('click', () => {initiateGrid(Math.floor(prompt("How many grids?")))});
function resetGame () {
    let promptValue = Math.floor(prompt("How many grids?"));
    promptValue < 26 ? initiateGrid(promptValue) : alert("Amount of boxes on one axis has to be smaller than 26") 
}
initiateGrid(16);
function initiateGrid (axisBoxes) {
    containerDiv.innerHTML = "";
    let boxMargin = Math.floor(axisBoxes*(-0.4166) + 11.666);
    boxMargin <= 0 ? boxMargin = 1 : null ;
    let widthBox = (Math.floor(((800 - boxMargin*2*axisBoxes) / axisBoxes)*10))/10;
    for (i = 0; i < (Math.pow(axisBoxes, 2)); i++) {
        const div = document.createElement('div');
        containerDiv.appendChild(div);
        containerDiv.lastChild.setAttribute("style", "width: " + widthBox + "px; height: " + widthBox + "px" + "; margin: " + boxMargin + "px");
    }
}
$("#centerDiv").hover(
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        if (document.querySelector(".switch input").checked) {
            document.querySelector(".slider").style.backgroundColor = bgColor;
            $("#mainDiv div").hover(function () { 
                $(this).css("background-color", bgColor);
            }, function () {
                $(this).css("background-color", "gainsboro");
            }
            )
        }
    }
)
