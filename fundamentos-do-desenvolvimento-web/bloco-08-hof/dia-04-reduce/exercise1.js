const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const reduceArr = arrays.reduce((acc, curr) => acc.concat(curr));

    return reduceArr;
  }

  console.log(flatten());