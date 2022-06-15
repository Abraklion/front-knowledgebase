const parentBurger = document.querySelector('.js-parent-burger'),
      sidebarMenu = document.querySelector('.js-sidebar-menu')

parentBurger.addEventListener('click', (e) => {

  if(document.documentElement.clientWidth < 767){

    parentBurger.classList.toggle('custom-sidebar-title--close');

    sidebarMenu.classList.toggle('sidebar-menu-hide')

  }

})








