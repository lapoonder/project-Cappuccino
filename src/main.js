(() => {
  const mob_menu = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
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
