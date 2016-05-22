/**
 * Created by zb on 2016/5/20.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle="#ff6600";
    context.strokeStyle = "#fff";
    context.lineWidth=4;
    context.fillRect(0, 0, 400, 300);
    context.strokeRect(50, 50, 180, 150);
    context.strokeRect(100, 100, 180, 150);
}