const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('load', () => {
    loader.classList.remove('loader_active');
    
    const data = JSON.parse(xhr.responseText);
    const valute = data.response.Valute;
    
    for (const key in valute) {
        const currency = valute[key];
        const item = document.createElement('div');
        item.classList.add('item');
        
        item.innerHTML = `
            <div class="item__code">${currency.CharCode}</div>
            <div class="item__value">${currency.Value}</div>
            <div class="item__currency">руб.</div>
        `;
        
        items.appendChild(item);
    }
});