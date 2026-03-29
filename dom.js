// 1
const button = document.querySelector(".butt");
const inp = document.querySelector("#inp");
button.textContent = inp.value;
console.log(inp.value);

// 2
const image1 = document.querySelector(".image");
image1.src =
  "https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg";
console.log(image1);

// 3
const image2 = document.querySelector(".img2");
const a = document.querySelector(".link");
image2.alt = "here photo";
a.href = "https://www.faceit.com/ru/players/MOLODOYElite";
console.log(a);
// 4
const list = document.querySelector("ul li");
list.textContent = "Hello";
console.log(list);
