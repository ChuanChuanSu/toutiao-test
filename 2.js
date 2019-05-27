// input aaaabbcccdddd output : a4b234d4
function analysis(str) {
  if (!str) {
    return '';
  }
  let result = '' + str[0];
  let pre = str[0];
  let count = 1;
  let cur;
  for (let i = 1; i < str.length; i++) {
    cur = str[i];
    if (cur === pre) {
      count++;
    } else {
      result += count + cur;
      pre = cur;
      count = 1;
    }
  }
  result += count;

  return result;
}

console.log(analysis('aaaabbcccdddd'));