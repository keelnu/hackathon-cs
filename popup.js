// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function (data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function (element) {
//   let color = element.target.value;
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.executeScript(tabs[0].id, {
//       code: 'document.body.style.backgroundColor = "' + color + '";',
//     });
//   });
// };

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     addImage(data);
  //   });

  // function addImage(obj) {
  //   const currPic = document.createElement('img');
  //   console.log(currPic);
  //   currPic.setAttribute('src', `${obj.message}`);
  //   // currPic = obj.message;
  //   board.appendChild(currPic);
  // }

  fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      addImage(data);
    });

  function addImage(obj) {
    const currPic = document.createElement('img');
    console.log(currPic);
    currPic.setAttribute('src', `${obj[0].url}`);
    // currPic = obj.message;
    board.appendChild(currPic);
  }

  // fetch('https://randomfox.ca/floof')
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     addImage(data);
  //   });

  // function addImage(obj) {
  //   const currPic = document.createElement('img');
  //   console.log(currPic);
  //   currPic.setAttribute('src', `${obj.image}`);
  //   // currPic = obj.message;
  //   board.appendChild(currPic);
  // }
  // fetch('https://www.petfinder.com/developers/')
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     addImage(data);
  //   });

  // function addImage(obj) {
  //   const currPic = document.createElement('img');
  //   console.log(currPic);
  //   currPic.setAttribute('src', `${obj.image}`);
  //   // currPic = obj.message;
  //   board.appendChild(currPic);
  // }

  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     let currPic = document.createElement('div');
  //     currPic.classList.add('item');
  //     item.innerHTML = `
  //       <img class="beach-image" src="${response.url}" alt="beach image"/>
  //     `
  //     document.body.appendChild(item);
  //   });
  // const
  // function renderItem() {
  //   fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
  //     let item = document.getElementByID('board');
  //     item.board = `<img class="animal" src="${response.url}" alt="cute animal"/>`;
  //     document.body.appendChild(item);
  //   });
  // }
});
