function fibs(n) {
  let x = 0;
  let y = 1;
  let z = null;
  let answer = [];

  answer.push(x);
  if (n === 0) {
    return answer;
  }
  answer.push(y);
  if (n === 1) {
    return answer;
  }

  for (let i = 2; i < n; i++) {
    z = x + y;
    x = y;
    y = z;

    answer.push(z);
  }

  return answer;
}

function fibsRec(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(1));
