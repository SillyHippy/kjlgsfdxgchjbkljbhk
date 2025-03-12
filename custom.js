document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            
            // Force style changes directly
            if (mobileMenu.classList.contains('is-active')) {
                mobileMenu.style.opacity = "1";
                mobileMenu.style.pointerEvents = "auto";
                mobileMenu.style.display = "flex";
                mobileMenu.style.zIndex = "9999";
                console.log('Menu should be visible now');
            } else {
                mobileMenu.style.opacity = "0";
                mobileMenu.style.pointerEvents = "none";
                console.log('Menu should be hidden now');
            }
        });
    } else {
        console.log('Hamburger or mobile menu not found!');
    }
});