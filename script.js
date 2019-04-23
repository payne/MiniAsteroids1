const pokemon=catchThemAll();
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let [tx, ty, dx, dy] = [10, 10, 100, 100];

function thing(x=tx,y=ty) {
  const r = getRandomInt(0, pokemon.length);
  const t = { x: x, y: y, p: pokemon[r] };
  // change tx, ty as a side effect so the next thing will be in a different spot.
  tx += dx; tx = tx % canvas.width;
  ty += dy; ty = ty % canvas.height
  return t;
}
let things = [thing(), thing(), thing()];
function down(e) {
  const t = thing(e.x, e.y);
  things.push(t);
}
document.onmousedown=down;

function draw() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  things.forEach(t => {
    ctx.drawImage(t.p.img,t.x,t.y);
    t.x += getRandomInt(-2, 2) % canvas.width;
    t.y += getRandomInt(-2, 2) % canvas.height;
  });
  requestAnimationFrame(draw);
}
draw();