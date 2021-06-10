var basArr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var mainArr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var mainTrue = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

var rowArr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var colArr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var posp = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubleNum = false;
var rightX = false;

function fillAndCheck() {
  doubleNum = false;

  let j = -1;
  mainCheck:

    for (let i = 0; i < 81; i++) {
      let x = document.querySelectorAll("input")[i].value;

      for (let xi = 0; xi < posp.length; xi++) {
        if (x == posp[xi]) {
          break;
        } else if (xi == posp.length - 1) {
          alert("Put a number between 1and 9 or leave it empty");
          break mainCheck;
        }
      }

      if (i % 9 == 0) {
        j++;
      }

      document.querySelectorAll("input")[i].style.color = "#000";


      mainTrue[i - j * 9][j] = false;

      if (x == "") {
        x = 0
        mainTrue[i - j * 9][j] = true;
        document.querySelectorAll("input")[i].style.color = "#f00";
      }

      mainArr[i - j * 9][j] = x;
    }
  j = -1;
  let k = -1;
  let a = 0;
  let b = 0;
  for (let i = 0; i < 81; i++) {
    if (i % 9 == 0) {
      j++;
    }
    k++
    if (k > 2) {
      k = 0;
      a++;
    }
    if (a > 8) {
      a = 0;
      b += 3;
    }
    rowArr[i - j * 9][j] = mainArr[a][k + b];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      colArr[i][j] = rowArr[j][i];
    }
  }
  console.log(mainArr);
  console.log(rowArr);
  console.log(colArr);
  console.log(mainTrue);

  checkIt(mainArr);
  checkIt(rowArr);
  checkIt(colArr);

  if (doubleNum) {
    alert("You have entered double Numbers");
  } else {

    alert("Good! let's solve");
    basArr = mainArr;
    addNum();


  }

}

function reset() {
  for (let i = 0; i < 81; i++) {
    document.querySelectorAll("input")[i].value = "";
    document.querySelectorAll("input")[i].style.color = "#000";

  }
}

function checkIt(arr) {
  let checkMeTrue = 0;
  let checkMefalse = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = 0; k < 9; k++) {
        if (arr[i][j] == arr[k][j] && arr[i][j] != 0 && i != k) {
          checkMefalse++;
        } else {
          checkMeTrue++;
        }
      }
    }
  }
  if (checkMefalse > 0) {
    doubleNum = true
  }
  //console.log(checkMefalse);
  //console.log(checkMeTrue);
}

//let expNum = 1;
//let j = -1;
//let i=-1
function addNum() {
  let expNum = 1;
  let j = -1;
  //i++;
  for (let i = 0; i < 81; i++) {
    doubleNum = false;

    if (i % 9 == 0) {
      j++;
    }

    if (mainTrue[i - j * 9][j]) {
      mainArr[i - j * 9][j] = expNum;
      document.querySelectorAll("input")[i].value = expNum;


      let jj = -1;
      let k = -1;
      let a = 0;
      let b = 0;
      for (let ii = 0; ii < 81; ii++) {
        if (ii % 9 == 0) {
          jj++;
        }
        k++
        if (k > 2) {
          k = 0;
          a++;
        }
        if (a > 8) {
          a = 0;
          b += 3;
        }
        rowArr[ii - jj * 9][jj] = mainArr[a][k + b];
      }
      for (let iii = 0; iii < 9; iii++) {
        for (let jjj = 0; jjj < 9; jjj++) {
          colArr[iii][jjj] = rowArr[jjj][iii];
        }
      }


      checkIt(mainArr);
      checkIt(rowArr);
      checkIt(colArr);

      if (doubleNum) {
        expNum++;
        if (expNum > 9) {
          mainArr[i - j * 9][j] = "";
          document.querySelectorAll("input")[i].value = "";

        }

        if ((i) % 9 == 0) {
          j--;
        }
        i--;
        while (mainTrue[i - j * 9][j] == false) {
          if ((i) % 9 == 0) {
            j--;
          }
          i--;

        }

        if (expNum > 9) {
          expNum = mainArr[i - j * 9][j] + 1;

          if ((mainArr[i - j * 9][j] + 1) > 9) {

            mainArr[i - j * 9][j] = "";
            document.querySelectorAll("input")[i].value = "";
            if ((i) % 9 == 0) {
              j--;
            }
            i--;
            while (mainTrue[i - j * 9][j] == false) {
              if ((i) % 9 == 0) {
                j--;
              }
              i--;

            }

            expNum = mainArr[i - j * 9][j] + 1;

          }

          if ((i) % 9 == 0) {
            j--;
          }
          i--;
        }
        while (mainTrue[i - j * 9][j] == false) {
          if ((i) % 9 == 0) {
            j--;
          }
          i--;

        }


      } else {
        expNum = 1;
      }
    }
  }


}
