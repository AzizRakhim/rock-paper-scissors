const elIndicator = document.querySelector(".indicator");

const elBtnHolder = document.querySelector(".button-holder");

const elPaper = document.querySelector(".paper");
const elScissors = document.querySelector(".scissors");
const elRock = document.querySelector(".rock");

const elBtns = document.querySelectorAll(".layer-one");
const elBtnsTwo = document.querySelectorAll(".layer-two");

const elImgs = elBtnHolder.querySelectorAll("img");

let elScoreNum = document.querySelector(".score__num");

let num = 0;

let elRandom = Math.floor(Math.random() * 3 + 1);

let elCount = 0;

restart();

function restart() {
  elPaper.addEventListener("click", () => {
    elIndicator.style.display = "flex";
    elScissors.style.display = "none";
    elRock.style.display = "none";
  
    elBtnHolder.style.backgroundImage = "none";
    elBtnHolder.style.width = `${938}px`;
    elBtnHolder.style.justifyContent = "space-between";
  
    count = 1;
  
    randomIt();
  });
  
  elScissors.addEventListener("click", () => {
    elIndicator.style.display = "flex";
    elPaper.style.display = "none";
    elRock.style.display = "none";
  
    elBtnHolder.style.backgroundImage = "none";
    elBtnHolder.style.width = `${938}px`;
    elBtnHolder.style.justifyContent = "space-between";
  
    count = 2;
  
    randomIt();
  });
  
  elRock.addEventListener("click", () => {
    elIndicator.style.display = "flex";
    elScissors.style.display = "none";
    elPaper.style.display = "none";
  
    elBtnHolder.style.backgroundImage = "none";
    elBtnHolder.style.width = `${938}px`;
    elBtnHolder.style.justifyContent = "space-between";
  
    count = 3;
  
    randomIt();
  });
  
  elBtns.forEach((el, index) => {
    el.addEventListener("click", () => {
      el.style.width = `${293}px`;
      el.style.height = `${300}px`;
      el.style.margin = "0";
  
      elBtnsTwo[index].style.width = `${293}px`;
      elBtnsTwo[index].style.height = `${287}px`;
      elBtnsTwo[index].style.padding = `${34}px`;
  
      elImgs[index].style.width = `${225}px`;
      elImgs[index].style.height = `${225}px`;
    });
  });
}

function randomIt() {
  if(elRandom == 1){
  
    let boxBox = document.createElement("div");
    boxBox.className = "layer-one paper compare";
  
    boxBox.innerHTML = `
      <div class="layer-two">
        <img src="images/paper.svg" alt="paper">
        <span class="hover-border">
  
        </span>
      </div>
    `;
  
    elBtnHolder.appendChild(boxBox);

    let boxTwo = boxBox.querySelector(".layer-two");
    let boxImg = boxBox.querySelector("img");
  
    boxBox.style.width = `${293}px`;
    boxBox.style.height = `${300}px`;
    boxBox.style.margin = "0";
  
    boxTwo.style.width = `${293}px`;
    boxTwo.style.height = `${287}px`;
    boxTwo.style.padding = `${34}px`;
  
    boxImg.style.width = `${225}px`;
    boxImg.style.height = `${225}px`;

  } else if(elRandom == 2){
    let boxBox = document.createElement("div");
    boxBox.className = "layer-one scissors compare";
  
    boxBox.innerHTML = `
      <div class="layer-two">
        <img src="images/scissors.svg" alt="scissors">
        <span class="hover-border">
  
        </span>
      </div>
    `;
  
    elBtnHolder.appendChild(boxBox);

    let boxTwo = boxBox.querySelector(".layer-two");
    let boxImg = boxBox.querySelector("img");
  
    boxBox.style.width = `${293}px`;
    boxBox.style.height = `${300}px`;
    boxBox.style.margin = "0";
  
    boxTwo.style.width = `${293}px`;
    boxTwo.style.height = `${287}px`;
    boxTwo.style.padding = `${34}px`;
  
    boxImg.style.width = `${225}px`;
    boxImg.style.height = `${225}px`;
  } else{
    let boxBox = document.createElement("div");
    boxBox.className = "layer-one rock compare";
  
    boxBox.innerHTML = `
      <div class="layer-two">
        <img src="images/rock.svg" alt="rock">
        <span class="hover-border">
  
        </span>
      </div>
    `;
  
    elBtnHolder.appendChild(boxBox);

    let boxTwo = boxBox.querySelector(".layer-two");
    let boxImg = boxBox.querySelector("img");
  
    boxBox.style.width = `${293}px`;
    boxBox.style.height = `${300}px`;
    boxBox.style.margin = "0";
  
    boxTwo.style.width = `${293}px`;
    boxTwo.style.height = `${287}px`;
    boxTwo.style.padding = `${34}px`;
  
    boxImg.style.width = `${225}px`;
    boxImg.style.height = `${225}px`;
  }

  compareIt();
}

function compareIt() {
  if(count == 1){
    if(elRandom == 1){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          DRAW
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);
    } else if(elRandom == 2){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU LOSE
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num--;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }

    } else{
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU WIN
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num++;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }
    }
  } else if(count == 2){
    if(elRandom == 1){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU WIN
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num++;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }

    } else if(elRandom == 2){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          DRAW
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);
    } else{
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU LOSE
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num--;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }

    }
  } else{
    if(elRandom == 1){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU LOSE
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num--;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }

    } else if(elRandom == 2){
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          YOU WIN
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);

      num++;

      if(num <= 0){
        elScoreNum.innerText = "0";
      } else{
        elScoreNum.innerText = num;
      }

    } else{
      let elCompare = document.querySelector(".compare");
      let elResult = document.createElement("div");
    
      elResult.innerHTML = `
        <h2 class="result-title">
          DRAW
        </h2>
        <div class="again">
          PLAY AGAIN
        </div>
      `;
    
      elBtnHolder.insertBefore(elResult, elCompare);
    }
  }
};


