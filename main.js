const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let number = 1;
const addElementList = () => {
    let li = document.createElement('li');
    li.textContent = number;

    if (number % 3 === 0) {
        li.classList.add('big');
    }
    number += 2;
    ul.appendChild(li);
}
btn.addEventListener('click', addElementList);