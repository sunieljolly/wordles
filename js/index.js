google.charts.load("current", { packages: ["table"] });
google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["line"] });

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

///////////////////NEWS POP UP//////////////////////////////////
function news() {
  document.getElementById("myModal").innerHTML =
    '<div class="modal-content">' +
    '<p class="exitbutton" onclick="exit()">&#9746;</p>' +
    "<a href=" + global[0].fpl + ">>>>What's this?<<<</a>" +
    "<p>Last update: " +
    global[0].updated +
    "</p>" +
    " <p>News:</p>" +
    "<p>" +
    global[0].newsMessage +
    "</p>" +
    "<a href=" + global[0].newsLink + ">Click me to read more!</a>" +
    "</div>";
  modal.style.display = "block";
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("myModal").innerHTML = "";
    }
  };
}
setTimeout(news, 2000);

function noCheating() {
  alert("No cheating please");
}

function league() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Name");
  data.addColumn("number", "L");
  data.addColumn("number", "G");
  data.addColumn("number", "7 day");
  data.addColumn("number", "3 day");
  data.addColumn("number", "🟩");
  data.addColumn("number", "🟨");
  data.addColumn("number", "⬛");
  data.addColumn("number", "GD");
  data.addColumn("number", "RPS");

  for (var i = 0; i < wordledata.length; i++) {
    var lines = [];
    var green = [];
    var yellow = [];
    var blank = [];
    var rps = [];
    var stars = [];
    var uncompletedgames = [];
    var noattempt = [];
    var day1 = wordledata[i].games[wordledata[i].games.length - 1].lines;
    var day2 = wordledata[i].games[wordledata[i].games.length - 2].lines;
    var day3 = wordledata[i].games[wordledata[i].games.length - 3].lines;
    var day4 = wordledata[i].games[wordledata[i].games.length - 4].lines;
    var day5 = wordledata[i].games[wordledata[i].games.length - 5].lines;
    var day6 = wordledata[i].games[wordledata[i].games.length - 6].lines;
    var day7 = wordledata[i].games[wordledata[i].games.length - 7].lines;
    var day7form = (day1 + day2 + day3 + day4 + day5 + day6 + day7) / 7;
    var day3form = (day1 + day2 + day3) / 3;

    for (var j = 0; j < wordledata[i].games.length; j++) {
      var gameLines = wordledata[i].games[j].lines;
      lines.push(gameLines);
      //lines.push(wordledata[i].games[j].lines);
      var gameGreens = wordledata[i].games[j].green;
      green.push(gameGreens);
      var gameYellows = wordledata[i].games[j].yellow;
      yellow.push(gameYellows);
      blank.push(gameLines * 5 - (gameGreens + gameYellows));
      if (wordledata[i].games[j].lines == 1) {
        rps.push(6);
      } else if (wordledata[i].games[j].lines == 2) {
        rps.push(5);
        stars.push("⭐");
      } else if (wordledata[i].games[j].lines == 3) {
        rps.push(4);
      } else if (wordledata[i].games[j].lines == 4) {
        rps.push(3);
      } else if (wordledata[i].games[j].lines == 5) {
        rps.push(2);
      } else if (wordledata[i].games[j].lines == 6) {
        rps.push(1);
      } else if (wordledata[i].games[j].lines == 7) {
        uncompletedgames.push("⛔");
        rps.push(0);
      } else if (wordledata[i].games[j].lines == 8) {
        noattempt.push("👎");
        rps.push(0);
      } else {
        rps.push(0);
      }

      var gamesplayed = wordledata[i].games.length;
      var linesplayed = lines.reduce(getSum, 0);
      var greenplayed = green.reduce(getSum, 0);
      var yellowplayed = yellow.reduce(getSum, 0);
      var blankplayed = blank.reduce(getSum, 0);
      var totalrps = rps.reduce(getSum, 0);
      var gd = greenplayed * 3 + yellowplayed * 2 - blankplayed;
      var avg = Math.round((linesplayed / gamesplayed) * 10) / 10;
    }
    wordledata[i].avg = avg;
    wordledata[i].totalstars = stars;
    wordledata[i].uncompleted = uncompletedgames;
    wordledata[i].noattempt = noattempt;
    data.addRows([
      [
        wordledata[i].player,
        linesplayed,
        gamesplayed,
        day7form,
        day3form,
        greenplayed,
        yellowplayed,
        blankplayed,
        gd,
        totalrps + gd / 1000000,
      ],
    ]);
  }
  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    sortAscending: false,
    width: "100%",
    height: "100%",
    title: "League Table",
    sortColumn: 9,
    allowHtml: true,
    frozenColumns: 0,
    cssClassNames: {
      headerRow: "headerRow",
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      hoverTableRow: "highlightClass",
      selectedTableRow: "selectedTableRow",
    },
  };
  var table = new google.visualization.Table(document.getElementById("screen"));
  google.visualization.events.addListener(table, "select", selectHandler);
  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) {
      var selectedValue = data.getValue(selectedItem.row, 0);
      playerprofile(selectedValue);
    }
  }
  table.draw(data, options);
  halloffame();
}

function halloffame() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Name");
  data.addColumn("number", "🟩");
  data.addColumn("number", "🟨");
  data.addColumn("number", "ID");
  data.addColumn("string", "Word");

  for (var i = 0; i < wordledata.length; i++) {
    var winningwords = [];
    for (var j = 0; j < wordledata[i].games.length; j++) {
      if (wordledata[i].games[j].lines === 2) {
        data.addRows([
          [
            wordledata[i].player,
            wordledata[i].games[j].green,
            wordledata[i].games[j].yellow,
            wordledata[i].games[j].id,
            wordledata[i].games[j].word,
          ],
        ]);
        winningwords.push(wordledata[i].games[j].word);
      }
    }
    var allletters = winningwords.join("");
    //console.log(wordledata[i].player)
    //console.log(allletters)
    //console.log(maxCount(allletters))
    for (var k = 0; k < wordledata.length; k++) {
      if (wordledata[k].player === wordledata[i].player) {
        wordledata[i].mostusedletters = maxCount(allletters);
      }
    }
  }

  var options = {
    alternatingRowStyle: true,
    showRowNumber: false,
    width: "100%",
    height: "100%",
    title: "League Table",
    allowHtml: true,
    sortColumn: 3,
    sortAscending: false,
    frozenColumns: 0,
    cssClassNames: {
      headerRow: "headerRow",
      tableRow: "tableRow",
      oddTableRow: "oddTableRow",
      hoverTableRow: "highlightClass",
      selectedTableRow: "selectedTableRow",
    },
  };
  var table = new google.visualization.Table(
    document.getElementById("screen2")
  );
  google.visualization.events.addListener(table, "select", selectHandler);
  function selectHandler() {
    var selectedItem = table.getSelection()[0];
    if (selectedItem) {
      var selectedValue = data.getValue(selectedItem.row, 0);
      playerprofile(selectedValue);
    }
  }

  table.draw(data, options);
  console.log(wordledata);
}

////////////////////////HELPERS///////////////////////////////////

function getSum(total, num) {
  return total + Math.round(num);
}

function maxCount(input) {
  const { max, ...counts } = (input || "").split("").reduce(
    (a, c) => {
      a[c] = a[c] ? a[c] + 1 : 1;
      a.max = a.max < a[c] ? a[c] : a.max;
      return a;
    },
    { max: 0 }
  );

  return Object.entries(counts).filter(([k, v]) => v === max);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function exit() {
  modal.style.display = "none";
}

function numberOfGreens(gameID) {
  totalGreens = [];
  for (var i = 0; i < wordledata.length; i++) {
    for (var j = 0; j < wordledata[i].games.length; j++) {
      if (wordledata[i].games[j].id == gameID) {
        totalGreens.push(wordledata[i].games[j].green);
      }
    }
  }
  console.log(totalGreens.reduce((partialSum, a) => partialSum + a, 0));
}

function numberOfYellows(gameID) {
  totalYellows = [];
  for (var i = 0; i < wordledata.length; i++) {
    for (var j = 0; j < wordledata[i].games.length; j++) {
      if (wordledata[i].games[j].id == gameID) {
        totalYellows.push(wordledata[i].games[j].yellow);
      }
    }
  }
  console.log(totalYellows.reduce((partialSum, a) => partialSum + a, 0));
}

function numberOfGames() {
  return wordledata[0].games.length;
}