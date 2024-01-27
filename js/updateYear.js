// File: scripts/updateYear.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the content with the current year
    document.getElementById('currentYear').textContent = currentYear;
});
