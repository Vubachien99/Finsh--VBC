let a = document.querySelector("#a");
let b = document.querySelector("#b");
let result = document.querySelector("#result");
let click = document.querySelector("#click");

function snt(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

click.addEventListener("click", function () {
  let a_value = Number(a.value);
  let b_value = Number(b.value);

  let count = 0;
  for (let i = a_value; i <= b_value; i++) {
    if (snt(i)) {
      count += i;
    }
  }

  result.value = count;
});
