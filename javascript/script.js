'use strict'

// selecting buttons
const btnDaily = document.querySelector('.button_daily');
const btnWeekly = document.querySelector('.button_weekly');
const btnMonthly = document.querySelector('.button_monthly');

const dailyData = document.querySelectorAll('.day');
const weeklyData = document.querySelectorAll('.weekly');
const monthlyData = document.querySelectorAll('.monthly');
// const weeklyData = document.



let i;
btnDaily.addEventListener('click', function(){
  
  // daily data
  for(i =0; i<dailyData.length; i++){
    dailyData[i].classList.add('active');
  }

  // weekly data
  for(i=0; i<weeklyData.length; i++){
    weeklyData[i].classList.remove('active');
  }

  // monthly data
  for(i=0; i<monthlyData.length; i++){
    monthlyData[i].classList.remove('active');
  }

  btnDaily.classList.add('active');
  btnWeekly.classList.remove('active');
  btnMonthly.classList.remove('active');
})

// Weekly content Button
btnWeekly.addEventListener('click', function(){
  for(let i=0; i<weeklyData.length; i++){
    weeklyData[i].classList.add('active'); 
  }

  for(let i =0; i<dailyData.length; i++){
    dailyData[i].classList.remove('active');
  }

  // monthly data
  for(i=0; i<monthlyData.length; i++){
    monthlyData[i].classList.remove('active');
  }

  btnDaily.classList.remove('active')
  btnWeekly.classList.add('active');
  btnMonthly.classList.remove('active');
  
})


// Monthly Button
btnMonthly.addEventListener('click', function(){
  
  for(let i =0; i<dailyData.length; i++){
    dailyData[i].classList.remove('active');
  }
  
  for(let i=0; i<weeklyData.length; i++){
    weeklyData[i].classList.remove('active'); 
  }


  // monthly data
  for(i=0; i<monthlyData.length; i++){
    monthlyData[i].classList.add('active');
  }

  btnDaily.classList.remove('active');
  btnWeekly.classList.remove('active');
  btnMonthly.classList.add('active')
})

// document.getElementById("daily1").click();