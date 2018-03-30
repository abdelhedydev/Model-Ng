

function list(tab) {
          console.log(tab);
          console.log("length Line: "+tab.length);
          console.log("length Column: "+tab[1].length);
          return tab ;
}
//Get the maximum
function Max(tab) {
     var max = tab[1][1]
          for (var i = 0; i < tab.length; i++) {
               for (var j = 0; j < tab[i].length; j++) {
                    if (tab[i][j] > max) {
                         max = tab[i][j]
                    }
               }
          }
          console.log(max);
          return max ;
}
//Minimum
function Min(tab) {
     var min = tab[1][1]
          for (var i = 0; i < tab.length; i++) {
               for (var j = 0; j < tab[i].length; j++) {
                    if (tab[i][j] < min) {
                         min = tab[i][j]
                    }
               }
          }
          console.log(min);
          return min ;
}
//Coorelation function
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
//Get the Minimum
function Min_fixed_line(tab,i) {
     var min = tab[i][1]
          for (var j = 0; j < tab.length; j++) {
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
  console.log("Func : Your Array");
  console.log(tab);
  var tab2 = Array.from(tab);
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            tab2[i][j] = (tab[i][j] - Min_fixed_column(tab,j)) / (Max_fixed_column(tab,j) - Min_fixed_column(tab,j));
       }
  }
  return tab2 ;
}

/// Enlevement de l'énté du Tableau
function enlev(tab){
  tab.shift(); // delete first line
    for (var i = 0; i < tab.length; i++) { // delete first columns
         tab[i].shift();
          }
}
//*****NEW :
//AVG Partiels
function Matrix_avg(tab){
  //hssine coorect this :p
  //done and fixed hihiihihihi 3:p
  var tab2 = [];

  //console.log(tab);
  for (var i = 1; i < tab.length; i++) {
    var arrayOfThisRow = [];
       for (var j = 1; j < tab[i].length; j++) {

            //console.log(i+"---i");
            //console.log(j+"---j");
            //ForDebug:console.log("tab["+i+"]"+"["+j+"]= "+tab[i][j]);

           if(isNumeric(tab[i][j])){

              if (j == 1)
              {
                //arrayOfThisRow.push(Number(tab[i][j]));
                arrayOfThisRow.push(tab[i][j]);
              }else {
                //boucle
                var s = 0;
                for(x = 1 ; x < j+1; x++){
                  s = s + Number(tab[i][x]);
                }
                arrayOfThisRow.push((s)/j);
              }

            }else{
                //arrayOfThisRow.push(tab[i][j]);
                alert("is not numeric")
            }
       }

       tab2.push(arrayOfThisRow);
  }
  return tab2 ;
}

//*****NEW :
//Matrix Score
function score_matrix(tab){
  var score = [];
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            score[i] = Max_fixed_line(tab,i);
       }
  }
  //i passed by here i think it needs SORT at the end
  score.sort();
  console.log(score);
  return score ;
}
//*****NEW :
//to check if n is numeric
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Ng Modeeeeel
function Ng(xtab){
  //Get new table data after coorelation to an array[][]
      var copy=[];
  console.log("Array");
  console.log(xtab);

  copy = Array.from(xtab);
  console.log("Array Copied");
  console.log(copy);

  enlev(xtab);

Standardisation(xtab);

}
