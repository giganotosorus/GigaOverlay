// ==UserScript==
// @name         GigaOverlay
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Un overlay permettant d'avoir une liste d'amis et quelques fonctionnalités supplémentaires sur jklm.fun
// @author       giganotosorus mort
// @match        https://jklm.fun/*
// @match        https://*.jklm.fun/games/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jklm.fun
// @grant       GM_xmlhttpRequest
// @connect     gigaoverlay.online
// ==/UserScript==

const roomCode = location.pathname.substr(1, 4).toUpperCase();

const url = "https://gigaoverlay.online/api/overlay?file=" + (!roomCode ? "overlay_home" : window.top === window.self ? "overlay_room" : "overlay_game");
unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;

$make('script', document.body, { src: url });