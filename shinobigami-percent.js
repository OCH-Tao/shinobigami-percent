const target = document.getElementById("target");
const plusminus = document.getElementById("plusminus");
const result = document.getElementById("result");
const button = document.getElementById("button");
const daigongen = document.getElementById("daigongen");
const special = document.getElementById("special");
const fumble = document.getElementById("fumble");
button.onclick = () => {
  result.innerText = "";
  let x = parseInt(target.value, 10);
  let y = parseInt(plusminus.value, 10);
  let l = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      l.push(i + j);
    }
  }
  let s = parseInt(special.value, 10);
  let f = parseInt(fumble.value, 10);
  let cnt = [0, 0, 0];
  for (let i = 0; i < l.length; i++) {
    if (l[i] + y >= x) {
      cnt[0]++;
    }
    if (l[i] >= s) {
      cnt[1]++;
    }
    if (l[i] <= f) {
      cnt[2]++;
    }
  }
  result.innerText = `通常時\n成功率:${(cnt[0] / l.length) * 100}%\nスペシャル率:${(cnt[1] / l.length) * 100}%\nファンブル率:${(cnt[2] / l.length) * 100}%`;
}
daigongen.onclick = () => {
  result.innerText = "";
  let x = parseInt(target.value, 10);
  let y = parseInt(plusminus.value, 10);
  let l = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      for (let k = 1; k <= 6; k++) {
        l.push(i + j + k - Math.min(i, j, k));
      }
    }
  }
  let s = parseInt(special.value, 10);
  let f = parseInt(fumble.value, 10);
  let cnt = [0, 0, 0];
  for (let i = 0; i < l.length; i++) {
    if (l[i] + y >= x) {
      cnt[0]++;
    }
    if (l[i] >= s) {
      cnt[1]++;
    }
    if (l[i] <= f) {
      cnt[2]++;
    }
  }
  result.innerText = `大権現時\n成功率:${(cnt[0] / l.length) * 100}%\nスペシャル率:${(cnt[1] / l.length) * 100}%\nファンブル率:${(cnt[2] / l.length) * 100}%`;
}