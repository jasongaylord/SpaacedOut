// Borrowed from haacked/haackbar
var SpaacedOut = (function() {
    // NodeList foreach Polyfill
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this)
            }
        }
    }
  
    // Haack namespace object.
    return {
        ready: function(init) {
          if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                window.setTimeout(init)
          }
          else {
            var completed = function() {
              document.removeEventListener("DOMContentLoaded", completed)
                window.removeEventListener("load", completed)
              init()
            }
            document.addEventListener("DOMContentLoaded", completed)
            window.addEventListener("load", completed)
          }
        },
        get: function(elementId) {
          var element = document.getElementById(elementId)
          if (element)
            return element
          var elements = document.getElementsByClassName(elementId)
          if (elements && elements.length > 0)
            return elements[0]
          return null
        },
        codeIdentity: function() {
          document.querySelectorAll(".highlighter-rouge, figure.highlight").forEach(i => {
            i.setAttribute("data-lang", "code");
            var l = i.getAttribute("data-lang").split("language-");
            1 < l.length && (l = l[1].split(" "[0], i.setAttribute("data-lang", l)));
          });
        }
        /*
            $(".highlighter-rouge, figure.highlight").each(function () { 
                $(this).attr("data-lang", "code"); 
                var t = $(this).attr("class").split("language-"); 
                1 < t.length && (t = t[1].split(" ")[0], $(this).attr("data-lang", t)); 
                var i = $(this).find("[data-lang]").data(); 
                i && $(this).attr("data-lang", i.lang) 
            }) 
        */
    };
  })()
  
  // This sets the `current-page` css class on the nav link
  // that points to the current page so we can render it differently
  // We do this in JS so that we can cache the header once rather than
  // generate it for every single page.
  SpaacedOut.ready(function() {
    // Set current page on navigation
    const path = window.location.pathname
    const currentPageLink = document.querySelector('.site-nav li a[href="' + path + '"]')
    if (currentPageLink) {
      const listItem = currentPageLink.parentElement
      listItem.classList.add('current-page')
      const span = document.createElement('span')
      span.innerText = currentPageLink.textContent
      listItem.appendChild(span)
      listItem.removeChild(currentPageLink)
    }
    SpaacedOut.codeIdentity();
})