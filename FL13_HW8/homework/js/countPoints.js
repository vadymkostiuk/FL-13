const COUNT_POINTS = result => {
  return result.reduce((totalPoints, point) => {

    if (point[0] > point[2]) {
      totalPoints += 3;
    } else {

      if (point[0] === point[2]) {
        totalPoints += 1;
      } else {
        totalPoints += 0;
      }

    }
    return totalPoints;

  },0);

};

console.log(COUNT_POINTS(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));


