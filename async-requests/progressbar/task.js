const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    });
    
    xhr.addEventListener('load', () => {
        progress.value = 1;
    });
    
    xhr.send(new FormData(form));
});