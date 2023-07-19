const topMenu = document.querySelector('#top-menu')
const btnToggleTopMenuIcon = document.querySelector('#toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (btnToggleTopMenuIcon.contains(e.target)) {
        // Click vào icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-top-menu-expanded')
    } else {
        // Click ra ngoài
        if (topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
