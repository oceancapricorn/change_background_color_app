document.getElementById('button').addEventListener('click', changeColor);

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);

  document.querySelector('body').style.background = `#${randomColor}`;
  document.querySelector('h1').textContent = `#${randomColor}`;
}
