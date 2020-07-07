"use strict";

let main = document.querySelector(".main");

//Блок надписи belavin
let bel = document.createElement("div");
bel.className = "belavin_brand";
bel.innerHTML = "";
main.append(bel);

//Надпись belavin
let belavin = document.createElement("p");
belavin.innerHTML = "<span>belavin</span>";
bel.append(belavin);

//блок для изображений
let brand = document.createElement("div");
brand.id = "brand";
main.append(brand);

//man
let img = document.createElement("img");
img.id = "man";
img.src = "img/stock/man.jpg";
brand.append(img);

//girl
let img2 = document.createElement("img");
img2.id = "girl";
img2.src = "img/stock/girl.jpg";
brand.append(img2);

//Инфромация о сертификатах
let cert = document.createElement("div");
cert.className = "info";
main.append(cert);

let textCert = document.createElement("div");
textCert.className = "text_Info";
cert.append(textCert);

let mass = {
  Base: "12 000 руб (Обработка 10 фотографий, исходники)",
  Premium: "16 000 руб (Обработка 10 фотографий, исходники, видео 30-50 сек)",
  Luxe:
    "19 000 руб (Время сьемки до 3-х часов. Обработка 20 фотографий, исходники, видео 30-50 сек)"
};
for (let i in mass) {
  textCert.innerHTML += [i] + ": " + mass[i] + "<br>" + "<br>";
}

//Кнопка
// let button = document.createElement('button');
// button.textContent = 'Узнать';
// main.append(button);

// button.onclick = function () {
//     let win = window.open("", "Акции", "width=200, heigth=200");
//     let mass =  {
//         'Base': '12 000 руб (Обработка 10 фотографий, исходники)',
//         'Premium': '16 000 руб (Обработка 10 фотографий, исходники, видео 30-50 сек)',
//         'Luxe': '19 000 руб (Время сьемки до 3-х часов. Обработка 20 фотографий, исходники, видео 30-50 сек)'
//     }
//     for (let i in mass){
//         win.document.write(mass[i] + '<br>' + '<br>');
//     }
// }
