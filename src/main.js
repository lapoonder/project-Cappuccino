(() => {
  const mob_menu = {
    // Додати атрибут mobile-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    // Додати атрибут mobile-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[mobile-modal-close]'),
    // Додати атрибут mobile-menu-window на бекдроп модалки
    modal: document.querySelector('[mobile-menu-window]'),
  };

  mob_menu.openModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    mob_menu.modal.classList.toggle('is-open');
  }
})();
