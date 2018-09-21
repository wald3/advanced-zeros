module.exports = function getZerosCount(number, base) {
  // your implementation
  let powerArr = [];
  let tmp = 1;
  let arr = powerCount(base);

  for (let j = 0; j < arr.length; j++) {
    tmp = 1;
    powerArr.push(0);

    while (~~(number / Math.pow(arr[j]["num"], tmp))) {
      powerArr[j] += ~~(number / Math.pow(arr[j]["num"], tmp));
      tmp++;

    }
  }
  let dividePows = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = ~~(powerArr[i] / arr[i]["pow"]);
    dividePows.push(temp);
  }

  return Math.min(...dividePows);
}

function powerCount(n) {
  if (n == 2) {
    return [{
      "num": 2,
      "pow": 1
    }]
  };
  let j = 1;
  let i = 2;
  let a = [];
  do {
    if (n % i == 0) {
      a[j] = i;
      j++;
      n = n / i;
    } else {
      i++;
    }
  }
  while (i < n);

  a[j] = i;
  let res = {};
  a.forEach(function (e) {
    res[e] = 1 + ~~res[e];
  })

  var s = [];
  for (k in res) {
    s.push({
      "num": k - 0,
      "pow": res[k]
    });
  }

  return s;
}
