document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    console.log("Hamburger element found:", !!hamburger);
    console.log("Mobile menu element found:", !!mobileMenu);

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            console.log("HAMBURGER CLICKED");
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            
            // EXTREME FORCE - override absolutely everything
            if (mobileMenu.classList.contains('is-active')) {
                console.log("TRYING TO SHOW MENU");
                mobileMenu.setAttribute('style', 
                    'opacity: 1 !important; ' +
                    'display: flex !important; ' +
                    'position: fixed !important; ' +
                    'top: 0 !important; ' +
                    'left: 0 !important; ' +
                    'width: 100% !important; ' +
                    'height: 100% !important; ' +
                    'background-color: rgba(255, 0, 0, 0.9) !important; ' +
                    'z-index: 999999 !important; ' + 
                    'pointer-events: auto !important;'
                );
                // Create and add text to confirm visibility
                const debugText = document.createElement('h1');
                debugText.textContent = "MENU IS ACTIVE";
                debugText.style.color = "white";
                debugText.style.textAlign = "center";
                mobileMenu.appendChild(debugText);
            } else {
                console.log("HIDING MENU");
                mobileMenu.setAttribute('style', 
                    'opacity: 0 !important; ' +
                    'pointer-events: none !important;'
                );
            }
        });
    } else {
        alert('Critical error: Hamburger or mobile menu not found!');
    }
});