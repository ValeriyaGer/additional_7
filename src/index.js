module.exports = function solveSudoku(matrix) {
  var newMatrix = matrix.slice();


  function verifyValidity(arr, i, j, a) {
    for (let k = 0; k < 9; k++) {
      if (arr[k][j] === a) return false;
      if (arr[i][k] === a) return false;
    }
    for (let m = (i - i % 3); m < (i - i % 3) + 3; m++) {
      for (let n = (j - j % 3); n < (j - j % 3) + 3; n++) {
        if (arr[m][n] === a) return false;
      }
    }
    return true;
 }
          
 function isSolved(arr) {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (arr[i][j] === 0) break;
      }
      if (arr[i][j] === 0) break;       
    }
    if ((i === 9)&&( j === 9)) return true;
        
    for(let k = 1; k <= 9; k++) {
      if (verifyValidity(arr, i, j, k)) {
        arr[i][j] = k;
              
        if (isSolved(arr)) return true;
        arr[i][j] = 0;
      }
    }
   return false;   
  }   



 if (isSolved(newMatrix)) return newMatrix; 
}
