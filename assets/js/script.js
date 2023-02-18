/**
 * Setting scores and selecting elements
*/
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('p-score');
const cScore = document.getElementById('c-score');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

/**
 * RandomClass array contains Font-Awesome Icons
 */
const randomClasses = ["fa-regular fa-hand-back-fist", "fa-regular fa-hand","fa-regular fa-hand-scissors"];
const text2 = document.getElementById('text2');

/**
 * Game function & setting forEach function for buttons
 */
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           /**
            * If tie
            */
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text2.innerHTML = "Tie!";
               text2.style.color = 'orange';
           } 
          /**
           * If not tie
           */
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "You win!";
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Computer wins!";
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Computer wins!";
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "You win!";
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text2.innerHTML = "Computer wins!";
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text2.innerHTML = "You win!";
               text2.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
/**
 * Calling game
 */
game();