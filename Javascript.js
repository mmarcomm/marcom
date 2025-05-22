// Filename: Javascript.js
// Author: Marco
// Description: JavaScript file for custom functionality
// Created on: [Insert Date]

// Strict mode for better error handling
'use strict';

// placeholderes
document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    // Load form
    fetch("form.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("form-placeholder").innerHTML = data;
        });

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
    // Load Form
    fetch("Form.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("Form-placeholder").innerHTML = data;
        });
    // upcoming-placeholder
    fetch("upcoming.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("upcoming-placeholder").innerHTML = data;
        });
});






    // Snipcart settings
        window.SnipcartSettings = {
          publicApiKey: "NjZhYTc0NDMtM2E2MS00YjE3LWI5ZWItYTQxNDc0OWVkMWNhNjM4ODM1MjQ3MzU1NTQyMTM4",
          loadStrategy: "on-user-interaction",
          version: "3.7.1",
          modalStyle: "side",
          currency: "eur"
};


// Snipcart loading script
window.SnipcartSettings = {
  publicApiKey: "NjZhYTc0NDMtM2E2MS00YjE3LWI5ZWItYTQxNDc0OWVkMWNhNjM4ODM1MjQ3MzU1NTQyMTM4",
  loadStrategy: "on-user-interaction",
};


(function(){
  var c, d;
  (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
  var s, S;
  (S = (s = window.SnipcartSettings).timeoutDuration) != null || (s.timeoutDuration = 2750);
  var l, p;
  (p = (l = window.SnipcartSettings).domain) != null || (l.domain = "cdn.snipcart.com");
  var w, u;
  (u = (w = window.SnipcartSettings).protocol) != null || (w.protocol = "https");
  var m, g;
  (g = (m = window.SnipcartSettings).loadCSS) != null || (m.loadCSS = !0);

  var y = window.SnipcartSettings.version.includes("v3.0.0-ci") ||
          (window.SnipcartSettings.version !== "3.0" &&
           window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
             numeric: !0,
             sensitivity: "base"
           }) === -1);

  var f = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
  window.LoadSnipcart = o;

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", r)
    : r();

  function r() {
    if (window.SnipcartSettings.loadStrategy === "on-user-interaction") {
      f.forEach(function(t) { document.addEventListener(t, o); });
      setTimeout(o, window.SnipcartSettings.timeoutDuration);
    } else {
      o();
    }
  }

  var a = !1;

  function o() {
    if (a) return;
    a = !0;
    let t = document.getElementsByTagName("head")[0],
        n = document.querySelector("#snipcart"),
        i = document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),
        e = document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);

    if (!n) {
      n = document.createElement("div");
      n.id = "snipcart";
      n.setAttribute("hidden", "true");
      document.body.appendChild(n);
    }

    h(n);

    if (!i) {
      i = document.createElement("script");
      i.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`;
      i.async = !0;
      t.appendChild(i);
    }

    if (!e && window.SnipcartSettings.loadCSS) {
      e = document.createElement("link");
      e.rel = "stylesheet";
      e.type = "text/css";
      e.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`;
      t.prepend(e);
    }

    f.forEach(function(v) { document.removeEventListener(v, o); });
  }

  function h(t) {
    if (!y) return;
    t.dataset.apiKey = window.SnipcartSettings.publicApiKey;
    if (window.SnipcartSettings.addProductBehavior)
      t.dataset.configAddProductBehavior = window.SnipcartSettings.addProductBehavior;
    if (window.SnipcartSettings.modalStyle)
      t.dataset.configModalStyle = window.SnipcartSettings.modalStyle;
    if (window.SnipcartSettings.currency)
      t.dataset.currency = window.SnipcartSettings.currency;
    if (window.SnipcartSettings.templatesUrl)
      t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl;
  }
})();



// (Rest of the Snipcart loading script goes here...)



// collapsible
document.addEventListener("DOMContentLoaded", function() {
	 // Get all collapsible buttons
	var coll = document.getElementsByClassName("collapsible");

	// Initialize all collapsible sections to be open
	for (var i = 0; i < coll.length; i++) {
		 var content = coll[i].nextElementSibling; // Get the next sibling content
		content.classList.add("show"); // Set initial state to open
		content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to the content's scroll height
		content.style.opacity = "1"; // Set initial opacity to 1
		content.style.transition = "opacity 0.5s, max-height 0.5s"; // Set fade transition

		// Add click event listener to each collapsible button
		coll[i].addEventListener("click", function() {
		var content = this.nextElementSibling; // Get the content associated with the clicked element
		// Toggle the show class
		if (content.classList.contains("show")) {
		 content.style.opacity = "0"; // Fade out
			setTimeout(() => {
					content.style.maxHeight = "0"; // Collapse the content
					content.classList.remove("show"); // Remove the show class
				}, 500); // Delay to allow fade-out to occur
			 } else {
				content.classList.add("show"); // Add the show class
				content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to the content's scroll height
				setTimeout(() => {
					content.style.opacity = "1"; // Fade in
				}, 10); // Delay to ensure max-height is set before fading in
			}
		});
	}
});

// Scroll to top button
function scrollToButton() {
    var targetButton = document.getElementById('obrasButton');
    if (targetButton) {
        // Calculate the Y offset of the target button from the top of the page
        var targetPosition = targetButton.getBoundingClientRect().top + window.pageYOffset;
        
        // Scroll to the calculated position smoothly
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Sidebar 
document.addEventListener("DOMContentLoaded", function () {
    const sidebars = document.querySelectorAll(".sidebar, .sidebar-selected");

    sidebars.forEach(sidebar => {
        sidebar.addEventListener("click", function (event) {
            event.preventDefault(); // Evita a navegação padrão

            // Encontra o item atualmente selecionado
            const currentSelected = document.querySelector(".sidebar-selected");
            
            if (currentSelected) {
                // Remove a classe "sidebar-selected" e adiciona "sidebar"
                currentSelected.classList.remove("sidebar-selected");
                currentSelected.classList.add("sidebar");

                // Muda o ícone de volta para "SGVs/arrow.svg"
                const currentIcon = currentSelected.querySelector(".smaller-icon");
                if (currentIcon) {
                    currentIcon.src = "SGVs/arrow.svg";
                }
            }

            // Se o item clicado já era o selecionado, apenas o desativa
            if (this !== currentSelected) {
                this.classList.remove("sidebar");
                this.classList.add("sidebar-selected");

                // Muda o ícone para "SGVs/arrowblack.svg"
                const newIcon = this.querySelector(".smaller-icon");
                if (newIcon) {
                    newIcon.src = "SGVs/arrowblack.svg";
                }
            }
        });
    });
});