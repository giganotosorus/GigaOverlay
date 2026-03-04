// ==UserScript==
// @name         GigaOverlay
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Un overlay permettant d'avoir une liste d'amis et quelques fonctionnalités supplémentaires sur jklm.fun
// @author       giganotosorus mort
// @match        https://jklm.fun/*
// @match        https://*.jklm.fun/games/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jklm.fun
// @updateURL    https://raw.githubusercontent.com/giganotosorus/GigaOverlay/refs/heads/main/script.js
// @downloadURL  https://raw.githubusercontent.com/giganotosorus/GigaOverlay/refs/heads/main/script.js
// @grant        GM_xmlhttpRequest
// @connect      giganotosorus.ddns.net
// ==/UserScript==

const roomCode = location.pathname.substr(1, 4).toUpperCase();

const url = "https://giganotosorus.ddns.net/api/overlay?file=" + (!roomCode ? "overlay_home" : window.top === window.self ? "overlay_room" : "overlay_game");
unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;

$make('script', document.body, { src: url });