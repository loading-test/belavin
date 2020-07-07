"use strict";

let main = document.querySelector(".main");

//Блок надписи belavin
let bel = document.createElement("div");
bel.className = "belavin_brand";
bel.innerHTML = "";
main.append(bel);
//---------------------------

//Надпись belavin
let belavin = document.createElement("p");
belavin.innerHTML = "<span>belavin</span>";
bel.append(belavin);

//Создаем header(шапка)
let head = document.createElement("header");
head.className = "header_top";
head.innerHTML = "";
main.prepend(head);
//---------------------------

//Блок Навигации
let nav = document.createElement("nav");
nav.className = "navigation";
nav.innerHTML = "";
head.append(nav);
//---------------------------

//Меню для ссылок
let foto = document.createElement("a");
foto.className = "nav_bg";
foto.setAttribute("href", "foto.html");
foto.innerHTML = "Portfolio";
nav.append(foto);

let video = document.createElement("a");
video.className = "nav_bg";
video.setAttribute("href", "video.html");
video.innerHTML = "Video";
nav.append(video);

let act = document.createElement("a");
act.className = "nav_bg";
act.setAttribute("href", "akci.html");
act.innerHTML = "certificate";
nav.append(act);

let review = document.createElement("a");
review.className = "nav_bg";
review.setAttribute("href", "review.html");
review.innerHTML = "comments";
nav.append(review);

//Города
let st = document.createElement("div");
st.className = "town_main";
main.append(st);

let state = document.createElement("div");
state.className = "town";
state.textContent = "Russia, Bali";
st.append(state);

//footer
let footer = document.createElement("footer");
footer.innerHTML = "";
main.append(footer);

//footer телефон
let footer_text = document.createElement("a");
footer_text.className = "tel";
footer_text.setAttribute("href", "tel: +79991134239");
footer_text.innerHTML = "✆ +7 (999)113-42-39";
footer.append(footer_text);

// footer email
let email = document.createElement("div");
email.className = "e-mail";
footer.append(email);

let address = document.createElement("a");
address.setAttribute("href", "mailto: belavinphotographer@gmail.com");
address.innerHTML = "✉ email";
email.append(address);

//Переход на соц.сети
let social = document.createElement("div");
social.className = "socialSet";
footer.append(social);

let youtube = document.createElement("div");
youtube.className = "social youtube";
social.append(youtube);

let whatsapp = document.createElement("div");
whatsapp.className = "social whatsapp";
social.append(whatsapp);

let instagram = document.createElement("div");
instagram.className = "social instagram";
social.append(instagram);

let vk = document.createElement("div");
vk.className = "social vk";
social.append(vk);

//------------------------------
let youtube_a = document.createElement("a");
youtube_a.className = "fa fa-youtube fa-2x";
youtube_a.setAttribute(
  "href",
  "https://www.youtube.com/channel/UC9u8k7WSxnuFACmGZkGY2rA"
);
youtube_a.innerHTML = "";
youtube.append(youtube_a);

let whatsapp_a = document.createElement("a");
whatsapp_a.className = "fa fa-whatsapp fa-2x";
whatsapp_a.setAttribute("href", "https://wa.me/79991134239");
whatsapp_a.innerHTML = "";
whatsapp.append(whatsapp_a);

let instagram_a = document.createElement("a");
instagram_a.className = "fa fa-instagram fa-2x";
instagram_a.setAttribute("href", "https://www.instagram.com/belavin_/?hl=ru");
instagram_a.innerHTML = "";
instagram.append(instagram_a);

let vk_a = document.createElement("a");
vk_a.className = "fa fa-vk fa-2x";
vk_a.setAttribute("href", "https://vk.com/alex_belavin");
vk_a.innerHTML = "";
vk.append(vk_a);
