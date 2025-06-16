function togglemenu() {
    const menu = document.querySelector('.mobile-nav');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    } else {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
    }
}