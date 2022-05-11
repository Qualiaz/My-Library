"use strict";

import "./styles/main.scss";

//***************************************************//
//***************************************************//
//*****              Selectors                  *****//

// HEADER / FORM SELECTIONS
const headerContainer = document.getElementById("headerContainer");

const formEl = document.getElementsByClassName("header__form-el");

const formBook = document.getElementById("formBook");
const formAuthor = document.getElementById("formAuthor");
const formPages = document.getElementById("formPages");
const formBtnStatus = document.getElementById("formBtnStatus");
const btnAddBook = document.getElementById("btnAddBook");

// MAIN SELECTIONS
const mainContainer = document.getElementById("mainContainer");
const mainCard = document.getElementById("mainCard");

const cardBook = document.querySelector(".main__card--book");
const cardAuthor = document.querySelector(".main__card--author");
const cardPages = document.querySelector(".main__card--pages");
const cardStatus = document.querySelector(".main__card--status");

const cardDelete = document.querySelector(".main__card--delete");
// console.log(CardBook.innerText);

//***************************************************//
//***************************************************//
//*****               Cards                     *****//

let cards = [];
mainCard.style.display = "none";

// CONSTRUCTOR
function Card(book, author, pages, status, id) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

Card.prototype.changeStatus = function (card, i) {
  card.addEventListener("click", () => {
    if ((card.innerText && cards[i].status) === "Read") {
      cards[i].status = "Not Read";
      card.innerText = "Not Read";
    } else {
      cards[i].status = "Read";
      card.innerText = "Read";
    }
  });
};

Card.prototype.deleteCard = function (cardDelBtn, card) {
  cardDelBtn.addEventListener("click", () => {
    card.remove();
    cards.pop();
  });
};

// Render Cards
function renderCards() {
  for (let i = cards.length - 1; i < cards.length; i++) {
    cardBook.innerText = cards[i].book;
    cardAuthor.innerText = cards[i].author;
    cardPages.innerText = cards[i].pages;
    cardStatus.innerText = cards[i].status;

    const newCardDisplay = mainCard.cloneNode(true);
    newCardDisplay.setAttribute("id", cards[i].id);
    newCardDisplay.style.display = "flex";
    mainContainer.appendChild(newCardDisplay);

    Card.prototype.changeStatus(newCardDisplay.childNodes[7], i);
    Card.prototype.deleteCard(newCardDisplay.childNodes[9], newCardDisplay);
    console.log(cards);
  }
}

//***************************************************//
//***************************************************//
//*****           Form Event Listeners          *****//

formBtnStatus.addEventListener("click", (e) => {
  e.preventDefault();

  if (formBtnStatus.innerText === "Not Read") formBtnStatus.innerText = "Read";
  else formBtnStatus.innerText = "Not Read";
});

btnAddBook.addEventListener("click", (e) => {
  e.preventDefault();

  // show(and toggle) form
  for (let el of formEl) {
    el.classList.toggle("header__form--hide");
  }

  // submit form
  if (formEl[0].classList.contains("header__form--hide")) {
    if (formBook.value.length >= 1 && formAuthor.value.length >= 1) {
      const card = new Card(
        formBook.value,
        formAuthor.value,
        formPages.value,
        formBtnStatus.innerText,
        `mainCard-${cards.length + 1}`
      );
      cards.push(card);
      renderCards();

      // restart form values
      formBook.value = "";
      formAuthor.value = "";
      formPages.value = "";
      formBtnStatus.innerText = "Read";
    }
  }
});
