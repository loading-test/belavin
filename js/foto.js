"use strict";

let main = document.querySelector(".main");
//----------------------------------------------------

//контейнер для изображения
let foto = document.createElement("div");
foto.className = "images_content";
foto.innerHTML = "";
main.append(foto);
//----------------------------------------------------

//модальное окно
let modal = document.createElement("div");
modal.id = "Mymodal";
modal.className = "modal";
main.append(modal);

//кнопка закрыть
let close = document.createElement("span");
close.className = "close";
close.style.display = "none";
close.innerHTML = "&times";
modal.append(close);
//----------------------------------------------------

let images = document.createElement("img");
images.className = "modal-content";
images.id = "img01";
modal.append(images);

//Коллекция картинок
let img = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg"
];
for (let k of img) {
  let selector = document.querySelector(".images_content");
  selector.innerHTML += '<img class="one" src="' + k + '">';
}
//-------------------------------------------------------

//Блок надписи belavin
let bel = document.createElement("div");
bel.className = "belavin_brand";
bel.innerHTML = "";
main.append(bel);

//Надпись belavin
let belavin = document.createElement("p");
belavin.innerHTML = "<span>belavin</span>";
bel.append(belavin);
//-------------------------------------------------------

//открываем картинку при клике
let one = document.querySelectorAll(".one");
for (let i = 0; i < one.length; i++) {
  one[i].onclick = function() {
    close.style.display = "block";
    modal.style.display = "block";
    images.src = this.src;
  };
}
//----------------------------------------------------

//Закрыть модальное окно
close.onclick = function() {
  modal.style.display = "none";
};
