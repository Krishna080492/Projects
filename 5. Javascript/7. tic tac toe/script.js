let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let winMsg = document.querySelector(".win-msg");
let msg = document.querySelector(".msg");

let turn0 = true;     //player0 n playerX
let count = 0;        //To Track Draw

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  true0 = true;
  count = 0;
  enableBoxes();
  winMsg.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box Clicked");
    if (turn0) {
      box.innerText = "0";
      box.style.color = "rgb(247, 0, 205)";        //color change rakhvo hoy to
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;      //ek box pr ek j var click thai
    count++;                  //draw mate count increase

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  })
});

// if match is draw
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  winMsg.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {    //winner mdi jai p6i bija koi box pr click nai thai
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {    //winner mdi jai p6i new game start karye to bdha box enable thai
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

// winner msg
const showWinner = (winner) => {
  msg.innerText = `Congratulation Winner is: ${winner}`;
  winMsg.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {

  for (let pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // console.log("Winner", posVal1);
        showWinner(posVal1);
        return true;
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);