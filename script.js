const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

ABCJS.renderAbc("paper", "X:1\nK:D\nDD AA|BBA2|\n");

ctx.lineWidth = 1;

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.fillRect(50, 50, 70, 100);


ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.stroke();
