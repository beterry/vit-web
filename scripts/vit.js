console.log('Hello, world.');

const toggleMobileNav = () => {
    console.log('mobile menu clicked')
    const mobileNav = document.querySelector('#topnav');
    const mobileNavBk = document.querySelector('#mobilenav-bk')
    mobileNav.classList.toggle('show');
    mobileNavBk.classList.toggle('show');
}