document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    const menuWithChildren = document.querySelector('li:nth-child(3)');
    const openMenu = document.querySelector('#Hamburger');
    const closeMenu = document.querySelector('#TopRow > p');
    const headerContent = document.getElementById('HeaderContent');

    if (menuWithChildren) {
        menuWithChildren.addEventListener('click', (e) => {
            const subMenu = menuWithChildren.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.classList.toggle('active');
            }
        });
    }

    if (openMenu && closeMenu && headerContent) {
        openMenu.addEventListener('click', () => {
            headerContent.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            headerContent.classList.remove('active');
        });
    }
});