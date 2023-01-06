const buttonOne = document.querySelector('#btnOne');
const buttonTwo = document.querySelector('#btnTwo');
const buttonThree = document.querySelector('#btnThree');
buttonOne.addEventListener('click', timerOne);
buttonTwo.addEventListener('click', timerTwo);
buttonThree.addEventListener('click', timerThree);

let amountTimeOne = 0;
let amountTimeTwo = 0; 
let amountTimeThree = 0; 

function timerOne(){

    amountTimeOne = 60;
    amountTimeTwo = 0;
    amountTimeThree = 0;

    countdownOne.style.display = "block";
    countdownTwo.style.display = "none";
    countdownThree.style.display = "none";

    buttonTwo.addEventListener('click', timerTwo);

buttonOne.removeEventListener('click', timerOne)
    function calculateTimeOne(){
        const countdownOne=document.querySelector("#countdownOne");
    
        let minutesOne = Math.floor(amountTimeOne/60);
        let secondsOne= amountTimeOne%60;
    
        amountTimeOne--;
        if (secondsOne<10) {
            secondsOne = "0"+secondsOne;
        }
        countdownOne.textContent = `${minutesOne} : ${secondsOne}`;
        if (amountTimeOne<0) {
                stopTimerOne();
            amountTimeOne=0;
            timerTwo()
        }
        function stopTimerOne(){
            clearInterval(timerIdOne);
        }
    }
    let timerIdOne = setInterval(calculateTimeOne,1000);
    }

//2.

function timerTwo(){

    amountTimeOne = 0;
    amountTimeThree = 0;

    countdownOne.style.display = "none";
    countdownTwo.style.display = "block";
    countdownThree.style.display = "none";

    buttonOne.addEventListener('click', timerOne);
    amountTimeTwo = 60; 

    buttonTwo.removeEventListener('click', timerTwo)
    function calculateTimeTwo(){
        const countdownTwo=document.querySelector("#countdownTwo");
    
        let minutesTwo = Math.floor(amountTimeTwo/60);
        let secondsTwo = amountTimeTwo%60;
    
        amountTimeTwo--;
        if (secondsTwo<10) {
        secondsTwo = "0"+secondsTwo;
        }        
        countdownTwo.textContent = `${minutesTwo} : ${secondsTwo}`;
        if (amountTimeTwo<0) {
                stopTimerTwo();
            amountTimeTwo=0;
        }
        function stopTimerTwo(){
            clearInterval(timerIdTwo);
        }
    }
    let timerIdTwo = setInterval(calculateTimeTwo,1000);
    }
//3.
    function timerThree(){

      amountTimeOne = 0;
      amountTimeTwo=0;
      amountTimeThree=0;
  
      countdownOne.style.display = "none";
      countdownTwo.style.display = "none";
      countdownThree.style.display = "block";
  
      buttonThree.addEventListener('click', timerThree);
      amountTimeThree = 900; 
  
      buttonTwo.removeEventListener('click', timerTwo)
      buttonOne.removeEventListener('click', timerOne)
  
      function calculateTimeThree(){
          const countdownThree=document.querySelector("#countdownThree");
      
          let minutesThree = Math.floor(amountTimeThree/60);
          let secondsThree= amountTimeThree%60;
      
          amountTimeThree--;
          if (secondsThree<10) {
          secondsThree = "0"+secondsThree;
          }
          countdownThree.textContent = `${minutesThree} : ${secondsThree}`;
          if (amountTimeThree<0) {
                  stopTimerThree();
              amountTimeThree=0;
              countdownThree.textContent = `CHECK YOUR RESULTS`;
          }
          function stopTimerThree(){
              clearInterval(timerIdThree);
          }
      }
      let timerIdThree = setInterval(calculateTimeThree,1000);
      }





