document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.overlay'),
        closeButtons = document.querySelectorAll('.close');
        body = document.querySelector('body');

    modalButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            e.preventDefault();

            const modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('modal-active');
            body.classList.add('modal-fixed');
        });

    });


    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            const parentModal = this.closest('.popup');

            parentModal.classList.remove('active');
            overlay.classList.remove('modal-active');
            body.classList.remove('modal-fixed');

        });

    });


    document.body.addEventListener('keyup', function (e) {
        const key = e.keyCode;

        if (key == 27) {

            document.querySelector('.popup.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('modal-active');
            document.querySelector('body').classList.remove('modal-fixed');

        }
        ;
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.popup.active').classList.remove('active');
        this.classList.remove('modal-active');
		body.classList.remove('modal-fixed');
    });
});