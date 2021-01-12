let html = document.querySelector("#html"); // 从html里获取id=html的元素
let style = document.querySelector("#style");

let string = `/* 你好，我叫小罗
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;



// let string = `
// /*你好，我是一名前端新人
// 接下来我要加样式了
// 我要加的样式是*/
// body{
//     color: red;
// }
// `;

// string = string.replace(/\n/g, "<br>")
// 因为回车在html里不会显示，所以要用正则表达式将所有的 \n 替换为 <br>。但是这样替换，会出现 < 这个符号。

let string2 = "";
let n = 0;

// setInterval(() => {
//   n = n + 1;
//   demo.innerHTML = n;
// }, 1000);
// 用setInterval让数字从1开始不停变大。

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>"; // 如果出现回车，就把回车替换成 <br> 。
    } else if (string[n] === " ") {
      string2 += "&nbsp;"; // html里的空格用 &nbsp; 表示。
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    // demo.innerHTML = string.substring(0, n);
    // innerHTML会覆盖原有的html里的内容。substring表示返回字符串对象中指定位置的子字符串
    style.innerHTML = string.substring(0, n);
    // 这行代码是为了把color的样式应用到html里。
    // 等号右边不是string2是因为string2含有<br>和&nbsp;这种html里的标签，因此body{}的内容无法被css识别。
    // 由于汉字会影响css识别body{}的内容，所以需要把汉字注释下。
    window.scrollTo(0, 99999); // 自动滚动浏览器的屏幕。
    html.scrollTo(0, 99999); // 自动滚动div1的屏幕。
    if (n < string.length - 1) {
      n += 1; // n的表达式如果有问题，就多改几个尝试
      step();
    }
  }, 50);
};
// 用setTimeout可以更自由地控制什么时候暂停。

step();
