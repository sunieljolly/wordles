google.charts.load('current', {'packages':['table']});
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['line']});

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');    
}




function league() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'L');
    data.addColumn('number', 'G');
    data.addColumn('number', 'Avg');
    data.addColumn('number', '🟩');
    data.addColumn('number', '🟨');
    data.addColumn('number', '⬛');
    data.addColumn('number', 'GD');
    data.addColumn('number', 'RPS');

    for (var i = 0; i < wordledata.length; i++) {
        var lines = []
        var green = []
        var yellow = []
        var blank = []
        var rps = []

       for (var j = 0; j < wordledata[i].games.length; j++) {        
        lines.push(wordledata[i].games[j].lines);
        green.push(wordledata[i].games[j].green);
        yellow.push(wordledata[i].games[j].yellow);
        blank.push(wordledata[i].games[j].blank);
        
        if (wordledata[i].games[j].lines == 1 ){
            rps.push(6)
        } else if (wordledata[i].games[j].lines == 2){
            rps.push(5)
        } else if (wordledata[i].games[j].lines == 3){
            rps.push(4)
        } else if (wordledata[i].games[j].lines == 4){
            rps.push(3)
        } else if (wordledata[i].games[j].lines == 5){
            rps.push(2)
        } else if (wordledata[i].games[j].lines == 6){
            rps.push(1)
        } else {
            rps.push(0)
        } 
        
        var gamesplayed = wordledata[i].games.length
        var linesplayed = lines.reduce(getSum, 0)
        var greenplayed = green.reduce(getSum, 0)
        var yellowplayed = yellow.reduce(getSum, 0)
        var blankplayed = blank.reduce(getSum, 0)
        var totalrps = rps.reduce(getSum, 0)
        var gd = ((greenplayed*3)+(yellowplayed*2))-(blankplayed)
    } 
    
        
    data.addRows([[
        wordledata[i].player + '<br>' + wordledata[i].stars,
        linesplayed,
        gamesplayed,
        Math.round((linesplayed/gamesplayed)* 10)/10, 
        greenplayed,
        yellowplayed,
        blankplayed,
        gd,
        (totalrps + (gd/1000000)),
    ]]);


    }
    var options =  {
        alternatingRowStyle: true,
        showRowNumber: false,
        sortAscending: false, 
        width: '100%', 
        height: '100%',
        title: 'League Table',
        sortColumn: 8,
        allowHtml: true,
        frozenColumns: 0,
        cssClassNames : {
          headerRow :'headerRow',
          tableRow: 'tableRow',
          oddTableRow: 'oddTableRow'
        },

        
}
var table = new google.visualization.Table(document.getElementById('screen'));	
table.draw(data, options);
halloffame();
}


function halloffame() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Lines');
    data.addColumn('number', '🟩');
    data.addColumn('number', '🟨');
    data.addColumn('number', '⬛');
    data.addColumn('number', 'ID');
    data.addColumn('string', 'Word');


    for (var i = 0; i < halloffamedata.length; i++) {
    data.addRows([[
        halloffamedata[i].player,
        halloffamedata[i].lines,
        halloffamedata[i].green,
        halloffamedata[i].yellow,
        halloffamedata[i].blank,
        halloffamedata[i].id,
        halloffamedata[i].word,        
    ]]);


    }
    var options =  {
        alternatingRowStyle: true,
        showRowNumber: false, 
        width: '100%', 
        height: '100%',
        title: 'League Table',
        allowHtml: true,
        sortColumn: 5,
        sortAscending: false, 
        frozenColumns: 0,
        cssClassNames : {
          headerRow :'headerRow',
          tableRow: 'tableRow',
          oddTableRow: 'oddTableRow'
        },

        
}
var table = new google.visualization.Table(document.getElementById('screen2'));	
table.draw(data, options);
}


////////////////////////HELPERS///////////////////////////////////

function getSum(total, num) {
    return total + Math.round(num);
  }

function information(){
    alert("Last update: 18:09:49 11-02-2022 \nReverse Points System \n1 Line = 6 Points \n2 Line = 5 Points \n3 Line = 4 Points \n4 Line = 3 Points \n5 Line = 2 Points \n6 Line = 1 Points \nGoal difference is based on 3 points for a green square, 2 points for a yellow and minus 1 for every blank square. This will be used if two players a tied for RPS. \nGuess the Wordle in two lines to make it on to the Hall of Fame ");
}