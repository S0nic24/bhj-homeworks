const titleElement = document.getElementById('poll__title');
const answersElement = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    titleElement.textContent = data.data.title;
    
    answersElement.innerHTML = '';
    
    data.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answer;
      
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      
      answersElement.appendChild(button);
    });
  });