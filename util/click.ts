export const initMouseClick = () => {
  // 初始化点击效果
  const cnv = document.getElementById('mineCanvas');
  const ctx = cnv.getContext('2d');
  const count = 20;
  const innerRadius = 30;
  const outterRadius = 150;
  const moreOutterRadius = 200;
  const easing = 0.05;
  const mcolor = ['#f4433699', '#ffeb3b99', '#03a9f499']

  resize(cnv);
  const mouse = new Mouse();
  mouse.getMousePosition(cnv);
  document.addEventListener('mousedown', e => {
    const balls = getEnoughBall(count, mouse.x, mouse.y, mcolor, innerRadius, moreOutterRadius);
    const circle = new Ball(mouse.x, mouse.y, innerRadius, '#f4433699');
    let opacticy = 0.6;
    (function animation(): void {
      requestAnimationFrame(animation);
      ctx.clearRect(0, 0, cnv.width, cnv.height);
      balls.forEach(item => {
        item.draw('fill', ctx);
        item.vx = (item.dx - item.x) * easing;
        item.vy = (item.dy - item.y) * easing;
        item.x += item.vx;
        item.y += item.vy;
        item.sx += -item.sx * easing;
        item.sy += -item.sy * easing;
      })
      circle.draw('stroke', ctx);
      circle.radius += (outterRadius - circle.radius) * easing;
      opacticy = opacticy - 0.6 * easing;
      circle.color = `rgba(244, 67, 54, ${opacticy})`
    })()
  })
}

const resize = (cnv: void) => {
  cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
}

const getEnoughBall = <T>(num , mouseX, mouseY, mcolor, innerRadius, moreOutterRadius): T => {
	let balls = [];
	for(let i = 0; i < num; i++) {
		let ball = new Ball(0, 0, Math.random() * (40 - 5 + 1) + 5, mcolor[parseInt(Math.random() * 3)]);
		ball.x = mouseX + Math.random() * innerRadius - Math.random() * innerRadius;
		ball.y = mouseY + Math.random() * innerRadius - Math.random() * innerRadius;
		let x = mouseX - ball.x;
		let y = mouseY - ball.y;
		let scale = Math.abs(x / y);
		ball.dx = (x < 0 ? 1 : -1) * moreOutterRadius / Math.sqrt(scale * scale + 1) * Math.random() * scale + mouseX;
		ball.dy = (y < 0 ? 1 : -1) * moreOutterRadius / Math.sqrt(scale * scale + 1) * Math.random() + mouseY;
		balls.push(ball);
	}
	return balls;
}

class Ball {
	constructor(x, y, radius, color) {
		this.x = x || 0;
		this.y = y || 0;
		this.vx = 0;
		this.vy = 0;
		this.sx = 1;
		this.sy = 1;
		this.radius = radius || 10;
		this.color = color || 'black';
	}
	draw(type, ctx) {
		if(['fill', 'stroke'].indexOf(type) == -1) {
			throw('ball.draw need a right type');
		}
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.scale(this.sx, this.sy);
		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.color;
		ctx.beginPath();
		ctx.arc(0, 0, this.radius, 0, 360 * Math.PI / 180);
		ctx.closePath();
		type === 'fill' ? ctx.fill() : ctx.stroke();
		ctx.restore();
	}
}

class Mouse {
	constructor() {
		this.x = 0;
		this.y = 0;
	}
	getMousePosition(cnv) {
		cnv.addEventListener('mousedown', (e) => {
			this.x = e.clientX - cnv.offsetLeft;
			this.y = e.clientY - cnv.offsetTop;
		}, false)
	}
}