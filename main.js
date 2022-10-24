const $ = document.querySelector.bind(document);

const container = $("main");
const text = $("h1");

const walk = 50;

function handleMouseMove(e) {
  let { offsetX: x, offsetY: y } = e;
  const { offsetWidth: width, offsetHeight: height } = this;
  if (e.target !== this) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const walkX = Math.round((x / width) * walk - walk / 2);
  const walkY = Math.round((y / height) * walk - walk / 2);
  text.style.textShadow = `${walkX}px ${walkY}px 0 rgba(0, 0, 0, 0.2)`;
}

container.addEventListener("mousemove", handleMouseMove);