function drawDownwardPyramidAsterisks(size) {
    let str = '';
  
    for (let i = size; i >= 1; i--) {
      str += '*'.repeat(i);
      str += '\n';
    }
  
    return str;
  }
  
  console.log(drawDownwardPyramidAsterisks(5));
  
