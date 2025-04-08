// Efeito  Scroll da header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Funcionalidades da Sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// funcao de abrir a sidebar
function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
}

// funcao de fechar a sidebar
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// listas de eventos
sidebarToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// fechar a disebar quando pressionar a tecla Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});

// Fechar a sidebar quando clicar em um link dela (optional)
const sidebarLinks = document.querySelectorAll('.sidebar-links a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});


// butao de retorno ao topo
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
