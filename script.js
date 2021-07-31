window.addEventListener('load', ()=>{
    setTimeout(()=>{
        const a = document.getElementsByClassName('load-image');
        [...a].forEach(element => {
            element.classList.add('show');   
        });
    }, 1000);
});