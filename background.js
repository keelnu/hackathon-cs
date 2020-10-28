// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log('The color is green.');
  });
});

// chrome.runtime.onInstalled.addListener(() => {
//   console.log('onInstalled...');
//   // create alarm after extension is installed / upgraded
//   chrome.alarms.create('refresh', { periodInMinutes: 3 });
// });

// chrome.alarms.onAlarm.addListener((alarm) => {
//   console.log(alarm.name); // refresh
//   helloWorld();
// });

// function helloWorld() {
//   console.log("Hello, world!");
// }
