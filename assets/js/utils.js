// Borrowed from haacked/haackbar and modified for many purposes.
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
  
    // Return the namespace object.
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
            var l = i.getAttribute("class").split("language-");
            if (l.length > 1) {
              var lang = l[1].split(" ");
              if (lang.length > 0) {
                i.setAttribute("data-lang", lang[0]);
              }
            }
            //1 < l.length && (l = l[1].split(" "[0], i.setAttribute("data-lang", l)));
          });
        },
        setupMenuToggle: function() {
          var menuToggle = document.getElementById('menu-toggle');
          if (menuToggle) {
            menuToggle.addEventListener('click', function(e){
              document.body.classList.toggle('menu--opened');
              SpaacedOut.menuToggleIcon();
              e.preventDefault();
            },false);
            document.body.classList.remove('menu--opened');
          
            window.addEventListener('resize', function () {
              if (menuToggle.offsetParent === null) {
                document.body.classList.remove('menu--opened');
              }
            }, true);
          }
        },
        menuToggleIcon: function() {
          var menuToggle = document.getElementById('menu-toggle');
          if (document.body.classList.contains('menu--opened')) {
            menuToggle.getElementsByClassName('fa-bars')[0].style.display = "none";
            menuToggle.getElementsByClassName('fa-bars')[0].style.visibility = "hidden";
            menuToggle.getElementsByClassName('fa-times')[0].style.display = "block";
            menuToggle.getElementsByClassName('fa-times')[0].style.visibility = "visible";
          } else {
            menuToggle.getElementsByClassName('fa-bars')[0].style.display = "block";
            menuToggle.getElementsByClassName('fa-bars')[0].style.visibility = "visible";
            menuToggle.getElementsByClassName('fa-times')[0].style.display = "none";
            menuToggle.getElementsByClassName('fa-times')[0].style.visibility = "hidden";
          }
        },
        setPostLinkTargetToBlank: function() {
          var postContent = document.getElementsByClassName("post-content");
          if (postContent.length > 0) {
            var links = postContent[0].getElementsByTagName("a");
            for (var link of links) {
              if (link.href.indexOf("#") != 0) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener");
              }
            }
          }
        }
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
    SpaacedOut.setupMenuToggle();
    SpaacedOut.menuToggleIcon();
    SpaacedOut.setPostLinkTargetToBlank();
})