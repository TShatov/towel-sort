
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix == undefined) {
    return [];
  } else if (matrix.length == 0) {
    return [];
  } else if (matrix.length == 1) {
    return matrix;
  } else if (matrix.length == 2) {
    let doubleMatrix = [];
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          let columnIdx = i % 2 === 0
            ? j
            : (matrix[i].length - j - 1);
          doubleMatrix.push(matrix[i][columnIdx]);
        }
      }
      return doubleMatrix;
  } else if (matrix.length == 3) {
    let tripleMatrix = [];
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          let columnIdx = i % 2 === 0
            ? j
            : (matrix[i].length - j - 1);
            tripleMatrix.push(matrix[i][columnIdx]);
        }
      }
      return tripleMatrix;
  } else if (matrix.length == 4) {
    let quadMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2 === 0
              ? j
              : (matrix[i].length - j - 1);
              quadMatrix.push(matrix[i][columnIdx]);
          }
        }
        return quadMatrix;
  } else {
    return [];
  }

}
