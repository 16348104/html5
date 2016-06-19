
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle='green';
    context.fillRect(0, 0, 800, 300);
    context.fillStyle='#fff';
    // context.strokeStyle='#fff';
    context.font = "bold 40px,'微软雅黑'";
    context.textBaseline = 'hanging';
    context.fillText('欢迎光临由麦子学院推出的',10,40,800);
    context.fillText('《HTML5和CSS3》轻松入门与实践',50,110,800);
    context.fillText('视频教程',580,180);
    // context.strokeText('麦子学院',0,40);
}
