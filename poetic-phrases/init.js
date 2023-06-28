const form = document.querySelector('#form');
const textareaPhrase = document.querySelector('#phrase');
const inputName = document.querySelector('#name');
const phraseCnt = document.querySelector('#phrase-cnt');
const messageCnt = document.querySelector('#message');
const authorCnt = document.querySelector('#author');
const alertCnt = document.querySelector('#alerts');
// Spanish versión
const versionSpanish = document.querySelector('#spanish-v');

form.addEventListener('submit', e => {
    e.preventDefault();
    createPhrase(textareaPhrase.value, inputName.value);
})

function createPhrase(message, name) {
    cleanHTML(alertCnt);
    if(versionSpanish.textContent === 'Inglés') {
        if(message === '' && name === '') {
            alerta('Campos vacios, escribe algo.')
            return;
        }
        if(message === '') {
            alerta('Campo frase vacío, por favor escribe algo.');
            return;
        }else if(name === '') {
            alerta('Campo nombre vacío, por favor escribe algo.');
            return;
        }
    }else if(versionSpanish.textContent === 'Español') {
        if(message === '' && name === '') {
            alerta('Fields Empty, please write something');
            return;
        }
        if(message === ''){
            alerta('Field Message Empty, please write something');
            return;
        }else if(name === '') {
            alerta('Field Name Empty, please write something');
            return;
        }
    }
    
    messageCnt.textContent = message;
    authorCnt.textContent = `-${name}`;
    phraseCnt.append(messageCnt);
    phraseCnt.append(authorCnt);

    form.reset();
}

function alerta(message) {
    const pAlert = document.createElement('P');
    pAlert.textContent = message;
    pAlert.classList.add('text-white', 'bg-red-700', 'w-fit', 'rounded', 'text-center', 'p-3', 'py-3', 'font-bold', 'mx-auto', 'text-xl');

    setTimeout(()=> {
        pAlert.remove();
    }, 3000);

    alertCnt.appendChild(pAlert);
}

// Clean HTML
function cleanHTML(selector) {
    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

versionSpanish.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const labelPh = document.querySelector('#label-phrase');
    const labelInput = document.querySelector('#label-input');
    const submitInput = document.querySelector('#submit-input');

    if(versionSpanish.textContent === 'Español') {
        title.textContent = "Di tu mejor frase";
        labelPh.textContent = 'Escribe tu Frase';
        labelInput.textContent = 'Escribe tu Nombre';
        submitInput.value = 'Enviar';
        messageCnt.textContent = 'Tu frase aparecerá aqui.';
        authorCnt.textContent = 'Tu nombre aparecerá aqui.'
        versionSpanish.textContent = 'Inglés';
        return;
    }else if(versionSpanish.textContent === 'Inglés'){
        title.textContent = "Say Your Best Phrase";
        labelPh.textContent = 'Type Your Phrases';
        labelInput.textContent = 'Type Your Name';
        submitInput.value = 'Send';
        messageCnt.textContent = 'Your Phrase Will Appear Here';
        authorCnt.textContent = 'Your Name Will Appear Here'
        versionSpanish.textContent = 'Español';
        return;
    }
});