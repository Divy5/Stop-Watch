 // Reference session:
    
 const countDownElement = document.getElementById('countDown');
 let resetValue = document.querySelector('.resetValue');
 let startCount = 0;
 let intervalId;
 let addElem;

 
 // Funtion Section:

 const startTimer = () =>{
   intervalId =  setInterval(() => {
     countDownElement.innerText = startCount ++;
   }, 1000);
 }

 const resetTimer = () =>{
   startCount = 0;
   countDownElement.innerText = startCount;
   clearInterval(intervalId)
 }

 const stopTimer = () =>{
   addElem = document.createElement("p");
   addElem.innerText =
   `The Stop time is ${startCount - 1}`;
   resetValue.append(addElem);
   clearInterval(intervalId)
 }
 
 const getTime = () =>{
   addElem = document.createElement("p");
   addElem.innerText = `The Get time is ${startCount - 1}`;
   resetValue.append(addElem);
 }

 const clearTime = () =>{
   resetValue.innerText = "";
 }



 // Reference + AddEventListener session:

 const start_btn = document.querySelector('.start_btn').addEventListener('click', () =>{
   startTimer();
 })

 const reset_btn = document.querySelector('.reset_btn').addEventListener('click', () => {
   resetTimer();
 })
 
 const stop_btn = document.querySelector('.stop_btn').addEventListener('click', () =>{
   stopTimer();
 })

 const time_btn = document.querySelector('.time_btn').addEventListener('click', () =>{
   getTime();
 })

 const clear_btn = document.querySelector('.clear_btn').addEventListener('click', () =>{
   clearTime();
 })
