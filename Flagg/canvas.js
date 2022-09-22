const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// fillRect()
// Danske flagget
ctx.fillStyle = 'white';
ctx.fillRect(20, 20, 310, 230);
ctx.fillStyle = '#C8102E'; //red
ctx.fillRect(20, 20, 100, 100);
ctx.fillRect(150, 20, 180, 100);
ctx.fillRect(20, 150, 100, 100);
ctx.fillRect(150, 150, 180, 100);

// strokeRect()
ctx.lineWith = 5;
ctx.strokeStyle = 'black';
ctx.strokeRect(20, 20, 310, 230); // Dansk
ctx.strokeRect(20, 350, 400, 250); // Svensk
ctx.strokeRect(600, 20, 330, 230); // Norsk
ctx.strokeRect(600, 350, 400, 250); //Finsk

// Svenske flagget
ctx.fillStyle = '#FECC02'; //yellow
ctx.fillRect(20, 350, 400, 250);
ctx.fillStyle = '#006AA7'; //blue
ctx.fillRect(20, 500, 120, 100);
ctx.fillRect(20, 350, 120, 100);
ctx.fillRect(190, 500, 230, 100);
ctx.fillRect(190, 350, 230, 100);

// Norske flagget
ctx.fillStyle = 'white';
ctx.fillRect(600, 20, 330, 230);
ctx.fillStyle = '#BA0C2F'; //red
ctx.fillRect(600, 20, 90, 80);
ctx.fillRect(600, 170, 90, 80);
ctx.fillRect(760, 20, 170, 80);
ctx.fillRect(760, 170, 170, 80);
ctx.fillStyle = '#00205B'; //blue
ctx.fillRect(600, 120, 330, 30);
ctx.fillRect(710, 20, 30, 230);

// Finske flagget
ctx.fillStyle = 'white';
ctx.fillRect(600, 350, 400, 250);
ctx.fillStyle = '#002F6C'; //blue
ctx.fillRect(600, 440, 400, 70);
ctx.fillRect(710, 350, 70, 250);


