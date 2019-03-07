import './styles.css';
import { getRandomInt } from "./rng"

const secretNumber = getRandomInt(1, 6);
const squares = document.querySelectorAll('.square');

squares.forEach((s, i) => {
    if ((i + 1) === secretNumber) { // +1 because foreach starts at 0 and secret number is 1-6
        const div = s as HTMLDivElement
        div.dataset.secret = 'true';
    }
})
squares.forEach(s => s.addEventListener('click', handleClick));

function handleClick() { // this function style allows you to use 'thing' which returns the specific event it is listenting so to spaek
    const div = this as HTMLDivElement;
    if (div.dataset.secret) {
        div.classList.add('winner');
        squares.forEach(s => s.removeEventListener('click', handleClick));
    } else {
        div.classList.add('loser')
    }
}