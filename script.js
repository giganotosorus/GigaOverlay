// ==UserScript==
// @name         GigaOverlay
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Un overlay permettant d'avoir des informations sur le jeux et des fonctionnalités en plus
// @author       giganotosorus mort
// @match        https://jklm.fun/*
// @match        https://*.jklm.fun/games/bombparty/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jklm.fun
// @grant       GM_xmlhttpRequest
// @connect     gigaoverlay.online
// ==/UserScript==

const roomCode = location.pathname.substr(1, 4).toUpperCase();

const url = "https://gigaoverlay.online/api/overlay?file=" + (!roomCode ? "overlay_home" : window.top === window.self ? "overlay_room" : "overlay_game");
unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;

$make('script', document.body, { src: url });

