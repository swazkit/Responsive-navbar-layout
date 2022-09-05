function classToggle() {
  const navs = document.querySelectorAll('.Navbar-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

$('.Navbar__Link-toggle').click(classToggle); 