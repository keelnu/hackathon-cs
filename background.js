// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// function cuteAnimals(tab) {
//   console.log('hi');
// }
chrome.tabs.create({ url: 'http://www.google.com' }, callback);
function callback(data) {
  console.log(data);
}
// chrome.tabs.onCreated.addListener(cuteAnimals);

// chrome.runtime.onInstalled.addListener(function () {
//   // fires when extension is first installed, updated to new version and when Chrome browser version is updated.
//   chrome.storage.sync.set({ color: '#3aa757' }, function () {
//     // need to change functionality below
//     // console.log('The color is green.');
//     function cuteAnimals(tab) {
//       console.log('hi');
//     }
//   //   browser.tabs.onCreated.addListener(cuteAnimals);
//   // });
//   console.log('hi');
// function cuteAnimals(tab) {
//   console.log('hi');
// }
// chrome.tabs.onCreated.addListener(
//   (tab,
//   function () {
//     console.log('hi, how are you?');
//   })
// );

//   // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//   //   chrome.declarativeContent.onPageChanged.addRules([
//   //     {
//   //       conditions: [
//   //         new chrome.declarativeContent.PageStateMatcher({
//   //           pageUrl: { hostEquals: 'developer.chrome.com' },
//   //         }),
//   //       ],
//   //       actions: [new chrome.declarativeContent.ShowPageAction()],
//   //     },
//   //   ]);
//   // });
// });
