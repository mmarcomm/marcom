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