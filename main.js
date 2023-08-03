const btnShowAndHide = document.getElementById("btn-show-hide");
const divsShowAndHide = document.querySelectorAll(".div-violet, .div-small");


let divsVisible = false;


btnShowAndHide.addEventListener('click', ()=>{
   
    
 divsShowAndHide.forEach((divsShowAndHide) => {
        
        if(divsVisible){
         divsShowAndHide.style.visibility = 'hidden';
        }
        else{divsShowAndHide.style.visibility = 'visible';

       } 
    })
       divsVisible = !divsVisible;

       


   });

    // Crear los elementos <p> una sola vez antes de agregar el evento a los botones
const divsViolet = document.querySelectorAll('.div-violet');
const pElement = document.createElement('p');
const pElement2 = document.createElement('p');
const pElement3 = document.createElement('p');

pElement.classList.add('current');
pElement2.classList.add('previous');
pElement3.classList.add('lastWeek');


divsViolet.forEach((element) => {  
  element.appendChild(pElement.cloneNode());
  element.appendChild(pElement2.cloneNode());
  element.appendChild(pElement3.cloneNode());

});

// Función para mostrar los datos
function Showdata(timeframe) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      divsViolet.forEach((element, index) => {
        const timeframesData = data[index % data.length].timeframes;
        const currentElement = element.querySelector('.current');
        const previousElement = element.querySelector('.previous');
        const lastWeekElement = element.querySelector('.lastWeek'); 

        lastWeekElement.textContent = `Last Week  - `
        currentElement.textContent = `${timeframesData[timeframe].current} hrs`;
        previousElement.textContent = `${timeframesData[timeframe].previous} hrs`;
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Agregar eventos a los botones
const btnShowDay = document.getElementById("btn-show-day");
btnShowDay.addEventListener('click', () => Showdata('daily'));

const btnShowWeekly = document.getElementById("btn-show-week");
btnShowWeekly.addEventListener('click', () => Showdata('weekly'));

const btnShowMonthly = document.getElementById("btn-show-month");
btnShowMonthly.addEventListener('click', () => Showdata('monthly'));
    
     
   
     