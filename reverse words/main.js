const form = document.querySelector('#form');
const word = document.querySelector('#word');
const pResult = document.querySelector('#result');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    if(word.value === '') {
        alert('escriba algo');
        return;
    }

    reverseWord(word.value)

    form.reset();
});

function reverseWord(word) {
    let wordReverse = word.split('').reverse().join('');

    pResult.textContent = wordReverse;
}