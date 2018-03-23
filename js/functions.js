
var tab =[
     [1,2,3],
     [10,20,30],
     [100,200,300],
     [1000,2000,3000],
     [10000,20000,30000]
];
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
console.log(1/x);
return 1/x ;
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
  var tab2 = tab ;
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            tab2[i][j] = (tab[i][j] - Min_fixed_column(tab,j)) / (Max_fixed_column(tab,j) - Min_fixed_column(tab,j));
       }
  }
  return tab2 ;
}

//AVG Partiels
function Matrix_avg(tab){
  //hssine coorect this :p
  var tab2 = tab ;
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            if (i == 0)
            {
              tab2[i][j] = tab[i][j];
            }
            else {
              //boucle
              tab2[i][j] = (tab[i-1][j] + tab[i][j])/i ;
            }
       }
  }
  console.log(tab2);
  return tab2 ;
}

//Matrix Score
function score_matrix(tab){
  var score = [];
  for (var i = 0; i < tab.length; i++) {
       for (var j = 0; j < tab[i].length; j++) {
            score[i] = Max_fixed_line(tab,i);
       }
  }
  console.log(score);
  return score ;
}
