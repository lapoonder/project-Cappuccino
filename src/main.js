(() => {
  const mob_menu = {
    // Додати атрибут mobile-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    // Додати атрибут mobile-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[mobile-modal-close]'),
    // Додати атрибути на лінки в меню
    closeModalHrefHome: document.querySelector(
      '[mobile-modal-menu-close-home]'
    ),
    closeModalHref: document.querySelector('[mobile-modal-menu-close]'),
    closeModalHrefAb: document.querySelector('[mobile-modal-menu-close-ab]'),
    closeModalHrefCat: document.querySelector('[mobile-modal-menu-close-cat]'),
    closeModalHref2: document.querySelector('[mobile-modal-menu-close-rev]'),
    closeModalHrefCu: document.querySelector('[mobile-modal-menu-close-cu]'),
    // Додати атрибут mobile-menu-window на бекдроп модалки
    modal: document.querySelector('[mobile-menu-window]'),
  };

  mob_menu.openModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalHref.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefHome.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefAb.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefCat.addEventListener('click', toggleModal);
  mob_menu.closeModalHrefCu.addEventListener('click', toggleModal);
  mob_menu.closeModalHref2.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    mob_menu.modal.classList.toggle('is-open');
  }
})();
