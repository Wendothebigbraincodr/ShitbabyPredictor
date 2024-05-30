// ==UserScript==
// @name         Shitbaby predictor
// @namespace    http://tampermonkey.net/
// @version      1
// @description  cool
// @author       W3ND0
// @match        https://bloxflip.com/*
// @require      https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.10.1/sha256.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

alert("shitbaby predictor, skidded by W3ND0")
alert("Vance Sawtelle loves kids")
console.log("shitbaby has loaded")

function executeCodeInConsole(code) {
  const script = document.createElement("script");
  script.textContent = code;
  document.body.appendChild(script);
  document.body.removeChild(script);
}


    var a = "3";
    var t = "10";

    function createGUI() {
        const initialBorderColor = "#fff";

        const guiHTML = `
            <div id="bloxflipESP" style="position: fixed; top: 20px; right: 20px; width: 195px; height: 410px; background-color: #000000; padding: 10px; z-index: 1000; color: #000; border: 2px solid ${initialBorderColor}; transition: border 0.3s; box-shadow: 0 0 10px 6px ${initialBorderColor};">

                <div id="headerSection" style="background-color: #FFFFFF; padding: 7px; display: flex; align-items: center;">
                    <h2 style="color: #000000;">shit baby predictor</h2>
                </div>

                <div style="display: flex; flex-direction: column; padding: 10px;">
                    <button class="predictButton1" id="bombminesButton" style="background-color: #fff; color: #000; border: none; padding: 10px; width: 120px; font-size: 16px; cursor: pointer; margin-bottom: 10px; border-radius: 5px;">Mines</button>
                    <button class="predictButton2" id="minesButton" style="background-color: #fff; color: #000; border: none; padding: 10px; width: 120px; font-size: 16px; cursor: pointer; margin-bottom: 10px; border-radius: 5px;">Safe Mines</button>
                    <button class="predictButton3" id="Towers" style="background-color: #fff; color: #000; border: none; padding: 10px; width: 120px; font-size: 16px; cursor: pointer; margin-bottom: 10px; border-radius: 5px;">Towers</button>
                    <button class="predictButton4" id="Crash" style="background-color: #fff; color: #000; border: none; padding: 10px; width: 120px; font-size: 16px; cursor: pointer; margin-bottom: 10px; border-radius: 5px;">Crash</button>
                    <button class="predictButton5" id="Slide" style="background-color: #fff; color: #000; border: none; padding: 10px; width: 120px; font-size: 16px; cursor: pointer; margin-bottom: 10px; border-radius: 5px;">Slide</button>
                </div>

             <!-- New Section -->
                <div id="colorPickerSection" style="margin-top: 10px;">
                    <label for="colorPicker" style="color: #FFFFFF; font-size: 16px; margin-right: 10px;">Theme</label>
                    <input type="color" id="colorPicker" value="${initialBorderColor}" style="width: 30px; height: 30px; border: none; border-radius: 5px;">
                </div>
        `;
        document.body.insertAdjacentHTML('beforeend', guiHTML);



document.getElementById('Slide').addEventListener("click", function() {
async function fetchRouletteData() {
  try {
    const response = await fetch("https://api.bloxflip.com/games/roulette");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function predictNextWinningColor(history) {
  const colorCounts = {
    'red': 0,
    'purple': 0,
    'yellow': 0
  };

  history.forEach(item => {
    const winningColor = item.winningColor;
    if (winningColor) {
      colorCounts[winningColor]++;
    }
  });

  const totalGames = history.length;
  const colorProbabilities = {};

  for (const color in colorCounts) {
    colorProbabilities[color] = colorCounts[color] / totalGames;
  }

  let maxProbability = 0;
  let predictedColor = null;

  for (const color in colorProbabilities) {
    if (colorProbabilities[color] > maxProbability) {
      maxProbability = colorProbabilities[color];
      predictedColor = color;
    }
  }

  return predictedColor;
}

fetchRouletteData().then(data => {
  if (data && data.history) {
    const rouletteHistory = data.history;
    const predictedColor = predictNextWinningColor(rouletteHistory);
    alert("Predicted Next Winning Color: " + predictedColor);
  }
});
});


document.getElementById('Crash').addEventListener('click', function() {
fetchData();
});


function fetchData() {
  fetch("https://api.bloxflip.com/games/crash")
    .then(response => response.json())
    .then(data => {
      const history = data.history;
      const crashPoints = history.map(record => record.crashPoint);
      const superSafePrediction = calculateAverage(crashPoints, 50);
      const safePrediction = calculateAverage(crashPoints, 10);
      const riskyPrediction = safePrediction * (1 + calculateStandardDeviation(crashPoints));

      const resultString = `shitbaby Safe Prediction: ${superSafePrediction.toFixed(2)} | Safe Prediction: ${safePrediction.toFixed(2)} | Risky Prediction: ${riskyPrediction.toFixed(2)}`;

      alert(resultString);
    })
    .catch(error => console.error(error));
}

function calculateAverage(array, windowSize) {
  const startIndex = Math.max(0, array.length - windowSize);
  const sum = array.slice(startIndex).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / Math.min(windowSize, array.length);
}

function calculateStandardDeviation(array) {
  const mean = array.reduce((accumulator, value) => accumulator + value, 0) / array.length;
  const squaredDifferences = array.map(item => Math.pow(item - mean, 2));
  const variance = squaredDifferences.reduce((accumulator, value) => accumulator + value, 0) / array.length;
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation / 100;
}


function linearRegression(data) {
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumX2 = 0;

    for (var i = 0; i < data.length; i++) {
        var x = data[i][0];
        var y = data[i][1];
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
    }

    var n = data.length;

    var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    return {
        slope: slope,
        intercept: intercept,
        predict: function (x) {
            return slope * x + intercept;
        },
    };
}

document.getElementById('Towers').addEventListener('click', function() {

alert("shitbaby predicted towers successfully!")

var towerRows = document.getElementsByClassName('towers_towersGameRow__flu2C towers_towersGameThreeRows__FLXL1');


for (var i = 0; i < towerRows.length; i++) {
    var towerRow = towerRows[i];


    var towerButtons = towerRow.getElementsByClassName('button_button__dZRSb towers_towersGameButton__xLe_v');


    for (var t = 0; t < towerButtons.length; t++) {
        var towerButton = towerButtons[t];


        towerButton.style.boxShadow = 'none';
        towerButton.style.animation = 'none';
    }


    if (towerButtons.length > 0) {

        var randomIndex = Math.floor(Math.random() * towerButtons.length);


        var randomTowerButton = towerButtons[randomIndex];


        randomTowerButton.style.boxShadow = '0 0 8px 5px #87ceeb';
        randomTowerButton.style.animation = 'spinBorder 5s linear infinite, glowBorder 5s linear infinite';
        }
    }
});



document.getElementById('bombminesButton').addEventListener('click', function() {
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://api.bloxflip.com/games/mines",
    onload: function (a) {
      const b = JSON.parse(a.responseText);
      const c = b.hasGame;

      if (c) {
        // If there is an active game, call the function to highlight predicted mines

        f(b.game.minesAmount);
      } else {
        // If no active game, show an alert
        alert("stupid retard");
      }
    },
    headers: {
      "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
    },
    onerror: function (a) {
      alert("Error checking if the user is in the game.", a);
    }
  });
});

function f(b) {
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://api.bloxflip.com/games/mines/history?size=5&page=0",
    onload: function (c) {
      const d = JSON.parse(c.responseText);
      const e = d.data.filter(a => a.minesAmount === b);
      const f = e.map(a => a.mineLocations);
      var g = f.flatMap(a => a).slice(0, 13);
      const h = document.querySelector("#__next > div.layout_layout__JvcqL > div > div.layout_layoutColumn__e9oxs > div.game-layout_gameLayout__bgIOR > div.game-layout_gameLayoutColumn__q01vS.game-layout_gameLayoutColumnRight__oj_7g > div > div");

      if (h) {
        var i = 0;
        const buttons = h.querySelectorAll("button");

        buttons.forEach(button => {
          button.style.boxShadow = "";
        });

        buttons.forEach(button => {
          const ariaLabel = button.getAttribute("aria-label");
          const mineNumber = parseInt(ariaLabel.split("mine")[1].replaceAll(" ", ""));
          // Ensure 'a' is defined in the same scope
          if (typeof a !== 'undefined' && g.includes(mineNumber) && i < parseInt(t)) {
            button.style.boxShadow = "0 0 8px 5px #Ff0000";
            i += 1;
          }
        });

      } else {
        alert("Could not select queryselector from div.");
      }
    },
    headers: {
      "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
    },
    onerror: function (a) {
      alert("Could not get mines history data.", a);
    }
  });
}

document.getElementById('minesButton').addEventListener('click', function() {
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://api.bloxflip.com/games/mines",
    onload: function (a) {
      const b = JSON.parse(a.responseText);
      const c = b.hasGame;

      if (c) {
        // If there is an active game, call the function to highlight predicted mines
        g(b.game.minesAmount);
      } else {
        // If no active game, show an alert
        alert("stupid retard");
      }
    },
    headers: {
      "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
    },
    onerror: function (a) {
      alert("Error checking if the user is in the game.", a);
    }
  });
});

function g(b) {
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://api.bloxflip.com/games/mines/history?size=5&page=0",
    onload: function (c) {
      const d = JSON.parse(c.responseText);
      const e = d.data.filter(a => a.minesAmount === b);
      const f = e.map(a => a.mineLocations);
      var g = f.flatMap(a => a).slice(0, 13);
      const h = document.querySelector("#__next > div.layout_layout__JvcqL > div > div.layout_layoutColumn__e9oxs > div.game-layout_gameLayout__bgIOR > div.game-layout_gameLayoutColumn__q01vS.game-layout_gameLayoutColumnRight__oj_7g > div > div");

      if (h) {
        var i = 0;
        const buttons = h.querySelectorAll("button");

        buttons.forEach(button => {
          button.style.boxShadow = "";
        });

        buttons.forEach(button => {
          const ariaLabel = button.getAttribute("aria-label");
          const mineNumber = parseInt(ariaLabel.split("mine")[1].replaceAll(" ", ""));
          // Ensure 'a' is defined in the same scope
          if (typeof a !== 'undefined' && g.includes(mineNumber) && i < parseInt(a)) {
            button.style.boxShadow = "0 0 8px 5px #87ceeb";
            i += 1;
          }
        });

      } else {
        alert("Could not select queryselector from div.");
      }
    },
    headers: {
      "x-auth-token": localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN")
    },
    onerror: function (a) {
      alert("Could not get mines history data.", a);
    }
  });
}




        document.getElementById('colorPicker').addEventListener('input', function(event) {
            const selectedColor = event.target.value;
            updateBorderColor(selectedColor);
        });
        makeDraggable(document.getElementById('bloxflipESP'));
    }

    function makeDraggable(element) {
        let pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;

        if (document.getElementById(element.id + 'Header')) {
            document.getElementById(element.id + 'Header').onmousedown = dragMouseDown;
        } else {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = element.offsetTop - pos2 + 'px';
            element.style.left = element.offsetLeft - pos1 + 'px';
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function updateBorderColor(color) {
        const bloxflipESP = document.getElementById('bloxflipESP');
        bloxflipESP.style.border = `2px solid ${color}`;
        bloxflipESP.style.boxShadow = `0 0 20px 5px ${color}`;
    }

    createGUI();
  //fetchKeys();
})();