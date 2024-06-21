let topMod = 0;
let leftMod = 0;

$("body").on("mousemove", webHandler);

function webHandler(event){
    let button = $('#yes').position();
    let buttonCenter = {
        x: button.left + 30,
        y: button.top + 15
    }
let distance = Math.sqrt(Math.pow(event.pageX - buttonCenter.x, 2))

if (distance < 80){
    var angle = calculateAngle (event, buttonCenter , distance)
    leftMod += 3 * angle.cos * (event.pageX < buttonCenter.x ? 1 : -1)
    topMod += 3 * angle.sin * (event.pageY < buttonCenter.y ? 1 : -1)
    $('#yes').css({top: topMod, left: leftMod, position: 'relative'})
}
}
function calculateAngle(mouse, center , distance){
    let sin = Math.abs(mouse.pageY - center.y)/distance;
    let cos = Math.abs(mouse.pageX - center.x)/distance;
    return {sin:sin , cos:cos}
}