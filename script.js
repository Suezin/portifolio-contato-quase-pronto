let linksNav = document.querySelectorAll('.link');

function toggleAtivo(event){
    
    linksNav.forEach(link => {
        link.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

linksNav.forEach(link => {
    link.addEventListener('click', toggleAtivo)

})