const target = document.getElementById("target");
const plusminus = document.getElementById("plusminus");
const result = document.getElementById("result");
const button = document.getElementById("button");
const daigongen = document.getElementById("daigongen");
const special = document.getElementById("special");
const fumble = document.getElementById("fumble");
const decide = () => {
  let t = parseInt(target.value, 10);
  let p = parseInt(plusminus.value, 10);
  let s = parseInt(special.value, 10);
  let f = parseInt(fumble.value, 10);
  if (s <= f) {
    s = f + 1;
  }
  const dice = { "t": t, "p": p, "s": s, "f": f };
  return dice;
}
const percent = (dice, l) => {
  let cnt = { "success": 0, "special": 0, "fumble": 0 };
  for (let i = 0; i < l.length; i++) {
    if (l[i] + dice.p >= dice.t && l[i] > dice.f) {
      cnt.success++;
    }
    if (l[i] >= dice.s) {
      cnt.special++;
    }
    if (l[i] <= dice.f) {
      cnt.fumble++;
    }
  }
  result.innerText = `通常時\n成功率:${(cnt.success / l.length) * 100}%\nスペシャル率:${(cnt.special / l.length) * 100}%\nファンブル率:${(cnt.fumble / l.length) * 100}%`;
}
button.onclick = () => {
  result.innerText = "";
  const dice = decide();
  let l = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      l.push(i + j);
    }
  }
  percent(dice, l);
}
daigongen.onclick = () => {
  result.innerText = "";
  const dice = decide();
  let l = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      for (let k = 1; k <= 6; k++) {
        l.push(i + j + k - Math.min(i, j, k));
      }
    }
  }
  percent(dice, l);
}