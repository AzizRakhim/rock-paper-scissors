const elIndicator = document.querySelector(".indicator");

const elBtnHolder = document.querySelector(".button-holder");
const elLayerOne = elBtnHolder.querySelectorAll(".layer-one");

const elShowHolder = document.querySelector(".show-holder");

let elScoreNum = document.querySelector(".score__num");
let num = 0;

let elFakeRandom = 0;
let elCount = 0;

elLayerOne.forEach((el, index) => {
  el.addEventListener("click", () => {
    let elRandom = Math.floor(Math.random() * 3 + 1);
    elFakeRandom = elRandom;

    elBtnHolder.style.display = "none";
    elIndicator.style.display = "flex";
    elShowHolder.style.display = "flex";

    let elImage = elShowHolder.querySelectorAll("img");
    let elShowLayer = elShowHolder.querySelectorAll(".layer-one");

    if(index == 0){
      elShowLayer[0].className = "layer-one paper";
      elImage[0].src = "images/paper.svg";
      elCount = 1;
    } else if(index == 1){
      elShowLayer[0].className = "layer-one scissors";
      elImage[0].src = "images/scissors.svg";
      elCount = 2;
    } else{
      elShowLayer[0].className = "layer-one rock";
      elImage[0].src = "images/rock.svg";
      elCount = 3;
    }

    if(elRandom == 1){
      elShowLayer[1].className = "layer-one paper";
      elImage[1].src = "images/paper.svg";
    } else if(elRandom == 2){
      elShowLayer[1].className = "layer-one scissors";
      elImage[1].src = "images/scissors.svg";
    } else{
      elShowLayer[1].className = "layer-one rock";
      elImage[1].src = "images/rock.svg";
    }

    compareIt();
  });
});

function compareIt() {
  let elResultTitle = document.querySelector(".result-title");
  if(elCount == 1){
    if(elFakeRandom == 1){
      elResultTitle.innerText = "DRAW";
    } else if(elFakeRandom == 2){
      elResultTitle.innerText = "YOU LOSE";

      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        num--;
        elScoreNum.innerText = num;
      }
    } else{
      elResultTitle.innerText = "YOU WIN";

      num++;
      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        elScoreNum.innerText = num;
      }
    }
  } else if(elCount == 2){
    if(elFakeRandom == 1){
      elResultTitle.innerText = "YOU WIN";

      num++;
      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        elScoreNum.innerText = num;
      }
    } else if(elFakeRandom == 2){
      elResultTitle.innerText = "DRAW";
    } else{
      elResultTitle.innerText = "YOU LOSE";

      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        num--;
        elScoreNum.innerText = num;
      }
    }
  } else{
    if(elFakeRandom == 1){
      elResultTitle.innerText = "YOU LOSE";

      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        num--;
        elScoreNum.innerText = num;
      }
    } else if(elFakeRandom == 2){
      elResultTitle.innerText = "YOU WIN";

      num++;
      if(num <= 0){
        elScoreNum.innerText = 0;
      } else{
        elScoreNum.innerText = num;
      }
    } else{
      elResultTitle.innerText = "DRAW";
    }
  }
}

const elAgain = document.querySelector(".again");

elAgain.addEventListener("click", () => {
  elBtnHolder.style.display = "flex";
  elIndicator.style.display = "none";
  elShowHolder.style.display = "none";
});



