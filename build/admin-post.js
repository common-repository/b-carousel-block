!function(){"use strict";window.copyBPlAdminShortcode=function(o){var e=document.querySelector("#bPlAdminShortcode-"+o+" input"),c=document.querySelector("#bPlAdminShortcode-"+o+" .tooltip");e.select(),e.setSelectionRange(0,30),document.execCommand("copy"),c.innerHTML=wp.i18n.__("Copied Successfully!","carousel-block"),setTimeout((function(){c.innerHTML=wp.i18n.__("Copy To Clipboard","carousel-block")}),1500)}}();