let canvas =document.getElementById('canvas');


let context = canvas.getContext('2d');

// canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// cascas bg color
canvas.style.background = '#BADFDB';



// draw a square (tree)

context.fillStyle = '#796465';

context.fillRect(500, 400, 100, 200);



// draw circles
context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '70';
context.arc(450, 370, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();


context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '70';
context.arc(530, 330, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();



context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '70';
context.arc(640, 360, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();



context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '70';
context.arc(500, 250, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();


context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '70';
context.arc(580, 230, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();





// draw grass
context.fillStyle = '#7A9D54';

context.fillRect(0, 600, 1500, 20);


context.fillStyle = '#76453B';

context.fillRect(0, 620, 1500, 20);


// draw branches


context.moveTo(550, 540);
context.lineTo(680, 480);
context.strokeStyle = '#796465';
context.lineWidth = '30';
context.stroke();




context.moveTo(510, 550);
context.lineTo(390, 480);
context.strokeStyle = '#796465';
context.lineWidth = '30';
context.stroke();


context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '40';
context.arc(390, 480, 20, 0, Math.PI * 2, false);;
context.stroke();
context.closePath();


context.beginPath();
context.strokeStyle = '#557C55';
context.lineWidth = '40';
context.arc(680, 480, 20, 0, Math.PI * 2, false);
context.stroke();
context.closePath();


