const target = document.getElementById("target");
const plusminus = document.getElementById("plusminus");
const result = document.getElementById("result");
const button = document.getElementById("button");
button.onclick = () => {
  result.innerText = "";
  let x = parseInt(target.value, 10);
  let y = parseInt(plusminus.value, 10);
  let l = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      l.push(i + j + y);
    }
  }
  let cnt = 0;
  for (let i = 0; i < l.length; i++) {
    if (l[i] >= x) {
      cnt++;
    }
  }
  result.innerText = `${(cnt / l.length) * 100}%`;
}