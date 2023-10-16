const toggleMobileNav = () => {
    const mobileNav = document.querySelector('#topnav');
    const mobileNavBk = document.querySelector('#mobilenav-bk')
    mobileNav.classList.toggle('show');
    mobileNavBk.classList.toggle('show');
}

const readMoreBtns = document.querySelectorAll('.read-more-btn');
console.log(readMoreBtns)

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btn = e.target;
        let container = btn;
        let i = 0;
        
        // go up the tree and look for read more container
        do {
            container = container.parentElement;
            i++;
        } while (!container.classList.contains('read-more-container') && i < 10)

        const readMoreContent = container.querySelectorAll('.read-more');
        
        readMoreContent.forEach(el => {
            el.classList.toggle('hide');
        })

        changeReadMoreButtonText(btn);
    })
})

const changeReadMoreButtonText = (btn) => {
    const text = btn.innerText;
    btn.innerText = text === 'Read More' ? 'Read Less' : 'Read More';
}