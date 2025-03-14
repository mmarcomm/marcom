// Filename: Javascript.js
// Author: Marco
// Description: JavaScript file for custom functionality
// Created on: [Insert Date]

// Strict mode for better error handling
'use strict';

// Your code starts here
function changeImage(imgElement) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imgElement.src;
}

// form-placeholder
document.addEventListener("DOMContentLoaded", function() {
    fetch("form.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("form-placeholder").innerHTML = data;
        });
});
