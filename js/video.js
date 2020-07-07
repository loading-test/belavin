"use strict";

//Коллекция картинок
let video = [
    'video/video_1.mp4',
    'video/video_2.mp4',
    'video/video_3.mp4',
    'video/video_4.mp4',
    'video/video_5.mp4'
];
for (let k of video) {
    document.querySelector('.main').innerHTML += '<video src=" ' + k + ' " controls autoplay loop muted>';
};
// -------------------------------

let main = document.querySelector('.main');

//Блок надписи belavin
let bel = document.createElement('div');
bel.className = "belavin_brand";
bel.innerHTML = "";
main.append(bel);
//-------------------------------

//Надпись belavin
let belavin = document.createElement('p');
belavin.innerHTML = "<span>belavin</span>";
bel.append(belavin);