const output = document.querySelector('.output'); 
function calculator(evt) {
    evt.preventDefault();
    const { target } = evt;
    if (target.nodeName !== "BUTTON") {
        return;
    }
    const valu = target.dataset.digit;
    try {
        if (valu === '=') {
            output.textContent = eval(output.textContent);  
            return;
        }
    } catch (e) {
        output.textContent = 'Error';
        return;
    }
    if (valu === 'C') {
        output.textContent = '';
        return;
    }
    if(valu === 'DEL'){
        output.textContent = output.textContent.slice(0,-1);
        return;
    }
    output.textContent += valu;
    
}
const btn = document.querySelector('.btn-click');
btn.addEventListener('click', calculator);
 