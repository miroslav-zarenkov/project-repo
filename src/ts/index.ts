import '../scss/style.scss';
import data from '../json/info.json';
import image from '../img/1.jpg';

function sum(a: number, b: number): number {
  const c = a + b;
  return c;
}
function createDiv(): void {
  const body = document.querySelector('body') as HTMLElement;
  const div = document.createElement('div');
  div.textContent = 'Hello, World!';
  body.appendChild(div);
  const img = document.createElement('img');
  img.src = image.toString();
  body.appendChild(img);
}

console.log(sum(7, 3));
console.log(data);
createDiv();
