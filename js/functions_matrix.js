//Changing Coorelation
function Coorelation(x) {
if(x == 0 ){
  return 0
}
else {
  return 1/x ;
}
}

//With Fixed Column
//Get the maximum
function Max_fixed_column(tab,j) {
     var max = tab[1][j]
          for (var i = 0; i < tab.length; i++) {
                    if (tab[i][j] > max) {
                         max = tab[i][j]
                    }
          }
          //console.log(max);
          return max ;
}
//Get the Minimum
function Min_fixed_column(tab,j) {
     var min = tab[1][j]
          for (var i = 0; i < tab.length; i++) {
                    if (tab[i][j] < min) {
                         min = tab[i][j]
                    }
          }
          //console.log(min);
          return min ;
}
// In Matrix
//Standardisation
function Standardisation(tab){
  var stand = [];
  for (var i = 0; i < tab.length; i++) {
    var row = []
       for (var j = 0; j < tab[i].length; j++) {
            row.push(Number((tab[i][j] - Min_fixed_column(tab,j)) / (Max_fixed_column(tab,j) - Min_fixed_column(tab,j))));
       }
       stand.push(row);
  }
  return stand ;
}

//Heading Splice
function enlev(etab){
  var qntab= [];
 for (var i = 0; i < etab.length-1; i++) {
   var row = []
   for (var j = 0; j < etab[i].length-1; j++) {
    row.push(Number(etab[i+1][j+1]));
   }
   qntab.push(row);
 }
 return qntab ;
}

//to check if n is numeric
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//AVG Partiels
function Matrix_avg(tab){
  var tab2 = [];
  for (var i = 0; i < tab.length; i++) {
    var arrayOfThisRow = [];
       for (var j = 0; j < tab[i].length; j++) {
              if (j == 0)
              {
                arrayOfThisRow.push(tab[i][j]);
              }else {
                //boucle
                var s = 0;
                for(x = 0 ; x < j+1; x++){
                  s = s + Number(tab[i][x]/(j+1));
                }
                arrayOfThisRow.push(s);
              }
       }
       tab2.push(arrayOfThisRow);
  }
  return tab2 ;
}

//With Fixed line
//Get the maximum
function Max_fixed_line(tab,i) {
     var max = tab[i][1]
          for (var j = 0; j < tab[i].length; j++) {
                    if (tab[i][j] > max) {
                         max = tab[i][j]
                    }
          }
          //console.log(max);
          return max ;
}

function score_matrix(tab){
  var score = [];
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            score[i] = Max_fixed_line(tab,i);
       }
  }
  return score ;
}

//Fussion Moyenne_Avg and Scoire
function fussion(tab,tab2){
  var rows = [[]];

        for (var i = 1; i < tab.length; i++) {
          rows.push([]);
        rows[i-1].push(tab[i][0])
      }
        for (var j = 0; j < tab2.length; j++) {
          rows[j].push(tab2[j]);
        }

  return rows;
}
//Hidding HTML elements
function hideelement(){
  //initial Array
  var x = document.getElementById('test');
  x.style='display:none';

  //Correlation butn
  var y = document.getElementById('btn');
  y.style='display:none';

  //input file
  var z = document.getElementById('myfile');
  z.style='display:none';

  //Submit file
  var u = document.getElementById('submit');
  u.style='display:none';
}

function display_result(final){
  //Add the new table ;
  var table = document.getElementById('table');
  for (var i=0; i<final.length; i++) {
        var row = table.insertRow();
        for (var j=0; j<final[i].length; j++) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(final[i][j]));
        }
    }

    //Adding Excel Button
    var z = document.getElementById('button-a');
    z.style='display:block';
}

//Ng Modeeeeel
function Ng(xtab){
  var final = fussion(xtab,score_matrix(Matrix_avg(Standardisation(enlev(xtab)))));
  display_result(final);
  hideelement();
}
function excel(){
  //Excel file
            var wb = XLSX.utils.table_to_book(document.getElementById('table'), {sheet:"Sheet JS"});
            var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

            function s2ab(s) {
                         var buf = new ArrayBuffer(s.length);
                         var view = new Uint8Array(buf);
                         for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                         return buf;
            }

            saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
}
