const colors = [
  {
    id: 1,
    name: "Black",
    hexCode: "#000000",
  },
  {
    id: 2,
    name: "Blue",
    hexCode: "#0000FF",
  },
  {
    id: 3,
    name: "Cyan",
    hexCode: "#00FFFF",
  },
  {
    id: 4,
    name: "Gray",
    hexCode: "#808080",
  },
  {
    id: 5,
    name: "Green",
    hexCode: "#008000",
  },
  {
    id: 6,
    name: "  Lim",
    hexCode: "#00FF00",
  },
  {
    id: 7,
    name: "Magenta",
    hexCode: "#FF00FF",
  },
  {
    id: 8,
    name: "Maroon",
    hexCode: "#800000",
  },
  {
    id: 9,
    name: "Navy",
    hexCode: "#000080",
  },
  {
    id: 10,
    name: "Olive",
    hexCode: "#808000",
  },
  {
    id: 11,
    name: "Purple",
    hexCode: "#800080",
  },
  {
    id: 12,
    name: "Red",
    hexCode: "#FF0000",
  },
  {
    id: 13,
    name: "Silver",
    hexCode: "#C0C0C0",
  },
  {
    id: 14,
    name: "Teal",
    hexCode: "#008080",
  },
  {
    id: 15,
    name: "White",
    hexCode: "#FFFFFF",
  },
  {
    id: 16,
    name: "Yellow",
    hexCode: "#FFFF00",
  },
];

const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);

  selectedDiv.innerHTML = textToPrint;
};

const colorMixer = () => {
  //need to use Math.floor to make Math.random into a integer(whole number)
  let randomColor = "";
  const randomColorId = Math.floor(Math.random() * colors.length);
  for (i = 0; i < colors.length; i++) {
    if (colors[i].id === randomColorId) randomColor = colors[i];
  }
  return randomColor;
};

// let currentBackgroundColor = '';

const handleButtonClick = (e) => {
  let buttonId = e.target.id;
  let currentBackgroundColor = {};

  if (buttonId === "home") {
    let currentBackgroundColor = colorMixer();
    let color = {
      name: currentBackgroundColor.name,
      hexCode: currentBackgroundColor.hexCode,
    };
    document.querySelector("body").style.backgroundColor =
      currentBackgroundColor.hexCode;
    return color;
  } else if (buttonId === "simple-mode") {
    console.log("simple");
    let selectedDiv = document.querySelector("#simpleDisplay").id;
    let domString = `<h1>This background color is ${currentBackgroundColor.name}</h1>`;
    printToDom(selectedDiv, domString);
  }
  if (buttonId === "hex-mode") {
    console.log("hex");
    let selectedDiv = document.querySelector("#hexDisplay").id;
    let domString = `<h1>This background hexcode is ${currentBackgroundColor.hexCode} </h1>`;
    printToDom(selectedDiv, domString);
  }
};

const buttonEvent = () => {
  document
    .querySelector(".mode-buttons")
    .addEventListener("click", handleButtonClick);
};

const homebuttonEvent = () => {
  document.querySelector("#home").addEventListener("click", handleButtonClick);
};

const init = () => {
  buttonEvent();
  homebuttonEvent();
};

init();
