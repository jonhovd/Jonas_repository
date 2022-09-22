const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// fillRect()
// Danske flagget
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 120, 100);
ctx.fillRect(170, 20, 190, 100);
ctx.fillRect(20, 150, 120, 100);
ctx.fillRect(170, 150, 190, 100);

// strokeRect()
ctx.lineWith = 5;
ctx.strokeStyle = 'black';
ctx.strokeRect(20, 20, 340, 230);
ctx.strokeRect(20, 350, 400, 250);
ctx.strokeRect(600, 20, 370, 230);
ctx.strokeRect(600, 350, 400, 250);

// Svenske flagget
ctx.fillStyle = 'yellow';
ctx.fillRect(20, 350, 400, 250);
ctx.fillStyle = 'blue';
ctx.fillRect(20, 500, 120, 100);
ctx.fillRect(20, 350, 120, 100);
ctx.fillRect(190, 500, 230, 100);
ctx.fillRect(190, 350, 230, 100);

// Norske flagget
ctx.fillStyle = 'red';
ctx.fillRect(600, 20, 110, 80);
ctx.fillRect(600, 170, 110, 80);
ctx.fillRect(780, 20, 190, 80);
ctx.fillRect(780, 170, 190, 80);
ctx.fillStyle = 'blue';
ctx.fillRect(600, 120, 370, 30);
ctx.fillRect(730, 20, 30, 230);

// Finske flagget
ctx.fillStyle = 'blue'
ctx.fillRect(600, 440, 400, 70);
ctx.fillRect(710, 350, 70, 250);
