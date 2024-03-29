"use strict";

$(document).ready(function() {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var t = document.createElement("style");
    t.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
    ),
      t.appendChild(
        document.createTextNode("@-ms-viewport{height:auto!important}")
      ),
      document.getElementsByTagName("head")[0].appendChild(t);
  }

  if (navigator.userAgent.match(/MSIE 10/i)) {
    var e = $("#footer_links_container");
    $(e).css("padding-top", "100px");
  }

  var o,
    i = $("#background_background_image"),
    n = function() {
      (document.body.style.overflow = "hidden"),
        ($(window).width() - 500) / $(window).height() < o
          ? (i.height($(window).height()), i.width("auto"))
          : (i.width($(window).width() - 500), i.height("auto")),
        (document.body.style.overflow = "");
    };

  $("<img>")
    .attr("src", i.attr("src"))
    .load(function() {
      (o = this.width / this.height), n();
    }),
    $(window).resize(function() {
      n();
    }),
    "undefined" != typeof $("#MicrosoftAccountExchange") &&
      $("#MicrosoftAccountExchange").text("Microsoft"),
    $("*").removeAttr("placeholder");
});
