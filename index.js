//modal
const thankState = document.getElementById('thank-state'); 

const openModal = document.getElementById('btn-submit');

const closeModal = document.getElementById('btn-close');

openModal.addEventListener('click', function(){
     thankState.style.display = 'flex'
})

closeModal.addEventListener('click', function(){
   thankState.style.display = 'none'
})

// rate number 

const rate1 = document.getElementById('rate-1');
const rate2 = document.getElementById('rate-2');
const rate3 = document.getElementById('rate-3');
const rate4 = document.getElementById('rate-4');
const rate5 = document.getElementById('rate-5');
const rateScore = document.getElementById('rate-score')

const score1 =  1; 
const score2 =  2; 
const score3 =  3; 
const score4 =  4; 
const score5 =  5; 

rate1.addEventListener('click', function(){
   rateScore.textContent = score1;
})

rate2.addEventListener('click', function(){
   rateScore.textContent = score2;
})

rate3.addEventListener('click', function(){
   rateScore.textContent = score3;
})

rate4.addEventListener('click', function(){
   rateScore.textContent = score4;
})

rate5.addEventListener('click', function(){
   rateScore.textContent = score5;
})



