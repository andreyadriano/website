document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById('navToggle');
  const menu = document.getElementById('navbarNav');

  // Função que abre ou fecha o menu
  function toggleMenu() {
    const isOpen = menu.classList.contains('show');
    // Se estiver aberto, fecha; se fechado, abre
    menu.classList.toggle('show', !isOpen);
    toggler.classList.toggle('collapsed', isOpen);
    toggler.setAttribute('aria-expanded', String(!isOpen));
  }

  // Clique no hambúrguer
  toggler.addEventListener('click', toggleMenu);

  // Clique em qualquer link fecha o menu
  document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      toggler.classList.add('collapsed');
      toggler.setAttribute('aria-expanded', 'false');
    });
  });
})