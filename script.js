// 모달 열기 및 닫기 기능
const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

modalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'block';
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach((modal, index) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
