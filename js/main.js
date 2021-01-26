/* 
   1.   player selects hand
   1.1. set var "score" to 0
   1.2. store player choise in var (hand--paper || hand--scissors || hand--rock)
        and store img-source in an other var
   1.3. target class "choose", set display: none
   1.4. target class "game", set display: flex

   2.   get players choise
   2.1. target class "hand--human" and add class (hand--paper || hand--scissors || hand--rock)
   2.2. target class "hand-img--human" add source

   3.   get npc's choise (random)   
   3.1. target class "hand--npc" add class (hand--paper || hand--scissors || hand--rock) and remove class "wait"
   3.2. target class "hand-inner--npc" set visibility: visible
   3.2. target class "hand-img--npc" add source 

   4.   check who is winner
   4.1. target class "result" set display: flex
   4.2. target class "result__title" set innerHtml to (you win || you lose)
   4.3. target class ("hand--human" || "hand--npc" based on who wins) add class "winner"
   4.4. if player wins - increment var "score"; target class "score__number" set innerHtml = var "score"

   5.   press "result__btn"
   5.1. target class "game", set display: none
   5.2. target class "result" set display: none
   5.3. target class "choose", set display: flex
   5.1. set all changed elements to default

   6.   press "rules-btn"
   6.1. show modal "rules"
   6.2. press "rules-btn--close"
   6.3. hide modal "rules"



*/


$(document).ready(function () {

   const scoreDisplay = $('.score__number');
   const handSelectors = $('.choose__hand');
   const selectionScreen = $('.choose');
   const gameScreen = $('.game');
   const handHuman = $('.hand--human');
   const handHumanImg = $('.hand-img--human');
   const handNpc = $('.hand--npc');
   const handNpcImg = $('.hand-img--npc');
   const btnPlayAgain = $('.result__btn');
   const btnRules = $('.rules-btn');
   const btnRulesClose = $('.close-btn');



   const player = {
      score: 0,
      choise: "",
      setChoise: (obj) => {
         player.choise = obj.classList[1].slice(8);
      }
   }

   const npc = {
      choise: "",
      chooseHand: () => {
         let randomNum = Math.floor(Math.random() * Math.floor(3));
         switch (randomNum) {
            case 0:
               npc.choise = "hand--paper";
               break;
            case 1:
               npc.choise = "hand--scissors";
               break;
            case 2:
               npc.choise = "hand--rock";
               break;
         }
      }
   }

   const getImgSource = (arg) => {
      switch (arg) {
         case "hand--paper":
            return "images/icon-paper.svg";
         case "hand--scissors":
            return "images/icon-scissors.svg";
         case "hand--rock":
            return "images/icon-rock.svg";
      }
   }

   const showScore = () => {
      scoreDisplay.html(player.score.toString());
   }

   const showGameScreen = () => {
      selectionScreen.css('display', 'none');
      gameScreen.css('display', 'flex');
      handHuman.addClass(player.choise);
      handHumanImg.attr('src', getImgSource(player.choise));
   }

   const showNpcChoise = () => {
      handNpc.removeClass('wait');
      handNpc.addClass(npc.choise);
      $('.hand-inner--npc').css('visibility', 'visible');
      handNpcImg.attr('src', getImgSource(npc.choise));
   }

   const doesPlayerWin = (human, computer) => {
      if (human === computer) {
         return "draw";
      } else if (human === "hand--paper" && computer === "hand--rock") {
         return "you win";
      } else if (human === "hand--paper" && computer === "hand--scissors") {
         return "you lose";
      } else if (human === "hand--rock" && computer === "hand--paper") {
         return "you lose";
      } else if (human === "hand--rock" && computer === "hand--scissors") {
         return "you win";
      } else if (human === "hand--scissors" && computer === "hand--rock") {
         return "you lose";
      } else if (human === "hand--scissors" && computer === "hand--paper") {
         return "you win";
      }
   }

   const handleResult = (result) => {
      $('.result').css('opacity', '1');
      $('.result__title').html(result);

      if (result === "you lose") {
         handNpc.addClass('winner');
         player.score--;
      } else if (result === "you win") {
         handHuman.addClass('winner');
         player.score++;
      }
      showScore();
   }

   const setDefault = () => {
      gameScreen.css('display', 'none');
      handHuman.removeClass('winner');
      handHuman.removeClass(player.choise);
      handNpc.removeClass('winner');
      handNpc.removeClass(npc.choise);
      handNpc.addClass('wait');
      $('.result__title').html("wait");
      $('.result').css('opacity', '0');
      $('.hand-inner--npc').css('visibility', 'hidden');
      handHumanImg.attr('src', '');
      handNpcImg.attr('src', '');
      player.choise = "";
      npc.choise = "";
      selectionScreen.css('display', 'flex');
   }

   showScore();

   handSelectors.click(function () {
      player.setChoise(this);
      npc.chooseHand();
      showGameScreen();
      setTimeout(showNpcChoise, 1000);
      setTimeout(handleResult, 2000, doesPlayerWin(player.choise, npc.choise));
   });

   btnPlayAgain.click(function () {
      setDefault();
   });

   btnRules.click(function() {
      $('.rules-modal').css('display', 'flex');
   });

   btnRulesClose.click(function() {
      $('.rules-modal').css('display', 'none');
   });




});