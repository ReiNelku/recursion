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

function mergeSort(array, start, end) {
  if (start < end) {
    const mid = Math.floor((end + start) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
  }
}

function merge(array, start, mid, end) {
  const tempArray = [];

  let i = start;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      tempArray.push(array[i]);
      i++;
      k++;
    } else {
      tempArray.push(array[j]);
      j++;
      k++;
    }
  }

  while (i <= mid) {
    tempArray[k] = array[i];
    i++;
    k++;
  }

  while (j <= end) {
    tempArray[k] = array[j];
    j++;
    k++;
  }

  for (let i = start; i <= end; i++) {
    array[i] = tempArray[i - start];
  }
}