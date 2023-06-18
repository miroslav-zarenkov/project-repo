import '../scss/style.scss';
import data from '../json/info.json';

function sum(a: number, b: number): number {
  const c = a + b;
  return c;
}
function createDiv(): void {
  const body = document.querySelector('body') as HTMLElement;
  const div = document.createElement('div');
  div.textContent = 'Hello, World!';
  body.appendChild(div);
}

console.log(sum(7, 3));
console.log(data);
createDiv();
