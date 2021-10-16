const outputEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// btnCreateEl.addEventListener("click", createBoxes);

// inputEl.addEventListener("input", (event) => {
//     outputEl.textContent = event.currentTarget.value;
//    const amount = outputEl.textContent;
//   console.log(inputEl.value);
//   console.log(createBoxes(inputEl.value));
// });

// createBoxes(inputEl.value);
// // console.log(inputEl.value);
// function createBoxes(amount) {

// //   console.log(inputEl.value);
// //   console.log(createBoxes(inputEl.value));

//     const boxEl = document.createElement("div");
//     boxEl.style.width = "30px";
//     boxEl.style.height = "30px";
//     boxEl.style.backgroundColor = getRandomHexColor();
//     outputEl.append(boxEl);

   
    
    
//     // console.log(boxEl);
//   };

//   btnDestroyEl.addEventListener("click", destroyBoxes);
//   function destroyBoxes() {
//     outputEl.textContent = "";
//   }


// когда вводишь в импут и нажимаешь на кнопку то 
// создается оутпут

// когда нажимаешь очистить то оутпут =""

//amount это походу число в инпуте

//аппенд не один а амаунт в инпуте -----------

//каждый след бокс это походу +=10  -----------

//элем(боксы) долдны иметь бекколоро
