const toggleMobileNav = () => {
    const mobileNavBtn = document.querySelector('#mobilenav-btn');
    const menu = document.querySelector('#mainnav-menu');
    const mobileNavBk = document.querySelector('#mobilenav-bk');
    menu.classList.toggle('show');
    mobileNavBk.classList.toggle('show');

    const mobileMenuIsShown = menu.classList.contains('show');
    if (mobileMenuIsShown) {
        mobileNavBtn.setAttribute('aria-expanded', 'true');
    } else {
        mobileNavBtn.setAttribute('aria-expanded', 'false');
    }
}

const readMoreBtns = document.querySelectorAll('.read-more-btn');

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

addEventListener("scroll", (event) => {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');

    if (scrollY > 0) {
        header.classList.add('detached');
    } else {
        header.classList.remove('detached');
    }
});