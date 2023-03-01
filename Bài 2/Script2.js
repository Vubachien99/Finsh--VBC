// < !-- Viết một function có tên numberOneTriangle(). Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác
// dụng in ra hình tam giác -->
h1 = document.querySelector(".h1");
function numberOneTriangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
h1.innerText = `${console.log(numberOneTriangle(3)).toString()}`;
