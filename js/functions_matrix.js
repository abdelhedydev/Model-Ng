//Changing Coorelation
function Coorelation(x) {
  return (x == 0) ? 0 : 1 / x
}
//With Fixed Column
//Get the maximum
function Max_fixed_column(tab, j) {
  let max = tab[1][j]
  for (let i = 0; i < tab.length; i++) {
    if (tab[i][j] > max) {
      max = tab[i][j]
    }
  }
  //console.log(max);
  return max;
}
//Get the Minimum
function Min_fixed_column(tab, j) {
  let min = tab[1][j]
  for (let i = 0; i < tab.length; i++) {
    if (tab[i][j] < min) {
      min = tab[i][j]
    }
  }
  //console.log(min);
  return min;
}
// In Matrix
//Standardisation
function Standardisation(tab) {
  let stand = [];
  for (let i = 0; i < tab.length; i++) {
    let row = []
    for (let j = 0; j < tab[i].length; j++) {
      row.push(Number((tab[i][j] - Min_fixed_column(tab, j)) / (Max_fixed_column(tab, j) - Min_fixed_column(tab, j))));
    }
    stand.push(row);
  }
  return stand;
}

//Heading Splice
function enlev(etab) {
  let qntab = [];
  for (let i = 0; i < etab.length - 1; i++) {
    let row = []
    for (let j = 0; j < etab[i].length - 1; j++) {
      row.push(Number(etab[i + 1][j + 1]));
    }
    qntab.push(row);
  }
  return qntab;
}

//to check if n is numeric
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//AVG Partiels
function Matrix_avg(tab) {
  let tab2 = [];
  for (let i = 0; i < tab.length; i++) {
    let arrayOfThisRow = [];
    for (let j = 0; j < tab[i].length; j++) {
      if (j == 0) {
        arrayOfThisRow.push(tab[i][j]);
      } else {
        //boucle
        let s = 0;
        for (x = 0; x < j + 1; x++) {
          s = s + Number(tab[i][x] / (j + 1));
        }
        arrayOfThisRow.push(s);
      }
    }
    tab2.push(arrayOfThisRow);
  }
  return tab2;
}

//With Fixed line
//Get the maximum
function Max_fixed_line(tab, i) {
  let max = tab[i][1]
  for (let j = 0; j < tab[i].length; j++) {
    if (tab[i][j] > max) {
      max = tab[i][j]
    }
  }
  //console.log(max);
  return max;
}

function score_matrix(tab) {
  let score = [];
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
      score[i] = Max_fixed_line(tab, i);
    }
  }
  return score;
}

//Fussion Moyenne_Avg and Scoire
function fussion(tab, tab2) {
  let rows = [[]];

  for (let i = 1; i < tab.length; i++) {
    rows.push([]);
    rows[i - 1].push(tab[i][0])
  }
  for (let j = 0; j < tab2.length; j++) {
    rows[j].push(tab2[j]);
  }

  return rows;
}
//Hidding HTML elements
function hideelement() {
  //initial Array
  let x = document.getElementById('test');
  x.style = 'display:none';

  //Correlation butn
  let y = document.getElementById('btn');
  y.style = 'display:none';

  //input file
  let z = document.getElementById('myfile');
  z.style = 'display:none';

  //Submit file
  let u = document.getElementById('submit');
  u.style = 'display:none';
}

function display_result(final) {
  //Add the new table ;
  let table = document.getElementById('table');
  for (let i = 0; i < final.length; i++) {
    let row = table.insertRow();
    for (let j = 0; j < final[i].length; j++) {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(final[i][j]));
    }
  }

  //Adding Excel Button
  let z = document.getElementById('button-a');
  z.style = 'display:block';

  //Adding Home Button
  let y = document.getElementById('button-home');
  y.style = 'display:block';
}

//Sorting the final Array
function sorting(mytab) {
  mytab.sort(function (a, b) {
    return b[1] - a[1];
  });
  return mytab;
}

//Ng Modeeeeel
function Ng(xtab) {
  let final = sorting(fussion(xtab, score_matrix(Matrix_avg(Standardisation(enlev(xtab))))));
  display_result(final);
  hideelement();
}
function excel() {
  //Excel file
  let wb = XLSX.utils.table_to_book(document.getElementById('table'), { sheet: "Sheet JS" });
  let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

  function s2ab(s) {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
}
