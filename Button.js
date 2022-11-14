// ==UserScript==
// @name         More Buttons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Just an extent of buttons for MPP,
// @author       Tau-Pi-2009
// @match        https://mppclone.com/*
// @match        https://multiplayerpiano.com/*
// @icon         https://www.google.com/s2/favicons?domain=mppclone.com
// @grant        none
// ==/UserScript==
let btn = `<div id="chat-download-btn" class="ugly-button">Chat</div>`;

  $("#bottom .relative").append(btn);

  $("#chat-download-btn").css({
    position: "absolute",
    left: "780px",
    top: "4px",
    //width: "50px",
    //"border-radius": "10px",
  });

  $("#chat-download-btn").on("click", () => {
    let list = [];

    $("#chat ul li").each((i, ele) => {
      let str = "";
      let ts = $(ele).find(".timestamp");
      str += $(ts).text() + " ";

      let shortID = $(ele).find(".id");
      str += $(shortID).text() + " ";

      let name = $(ele).find(".name");
      str += $(name).text() + " ";

      let mes = $(ele).find(".message");
      str += $(mes).text() + "\n";

      list.push(str);
    });

    let uri = URL.createObjectURL(new Blob(list, { type: "text/plain" }));

    new Notification({
      id: "chat-download",
      class: "long",
      title: "Chat Has Been Downloaded!",
      html: `<h3>Here it is! Your very own file!</h3><br><a href="${uri}" download>Download Chat!</a><br><br>`,
      duration: 300000,
      target: "#bottom",
      
    });
  });
  
  $("#bottom .relative").append(
    `<div id="js-btn" class="ugly-button translate">Execute Code</div>`
  );
$("#js-btn")
    .css({ position: "absolute", left: "900px", top: "32px" })
    .on("click", () => {
      var code = prompt("Enter JavaScript code.");
      if (!code) return;
      try {
        alert(eval(code));
      } catch (e) {
        alert("Error: " + e);
      }
    });
  
//Import into Console for it to run.
