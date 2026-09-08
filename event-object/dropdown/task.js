const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

    value.addEventListener('click', function(event) {
        event.stopPropagation();
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        link.addEventListener('click', function(event) {
            event.preventDefault();
            value.textContent = this.textContent;
            list.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
    });
});