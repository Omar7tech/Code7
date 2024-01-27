var htmlEditor = ace.edit("editor");
htmlEditor.setTheme("ace/theme/twilight"); // Dark mode theme
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});

var cssEditor = ace.edit("cssEditor");
cssEditor.setTheme("ace/theme/twilight"); // Dark mode theme
cssEditor.session.setMode("ace/mode/css");
cssEditor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});

var resultFrame = document.getElementById("resultFrame");
var editorContainer = document.getElementById("editorContainer");

function updateResult() {
  var htmlCode = htmlEditor.getValue();
  var cssCode = cssEditor.getValue();

  // Create a document fragment to build the HTML structure
  var doc = document.implementation.createHTMLDocument();

  // Create HTML elements for head and body
  var head = doc.createElement("head");
  var body = doc.createElement("body");

  // Create and append style element for CSS
  var style = doc.createElement("style");
  style.appendChild(doc.createTextNode(cssCode));
  head.appendChild(style);

  // Append HTML code to the body
  body.innerHTML = htmlCode;

  // Append head and body to the document
  doc.documentElement.appendChild(head);
  doc.documentElement.appendChild(body);

  // Set the document as the srcdoc for the iframe
  resultFrame.srcdoc = doc.documentElement.outerHTML;
}

htmlEditor.on("change", updateResult);
cssEditor.on("change", updateResult);
updateResult(); // Initial update

var loadButton = document.getElementById("loadButton");
loadButton.addEventListener("click", loadDemoText);

var loadButton = document.getElementById("loadButton");
loadButton.addEventListener("click", loadDemoText);

function loadDemoText() {
  // Load HTML demo
  fetch("demo1html.txt")
    .then((response) => response.text())
    .then((htmlText) => {
      htmlEditor.setValue(htmlText);
    })
    .catch((error) => {
      console.error("Error loading HTML demo:", error);
    });

  // Load CSS demo
  fetch("demo1css.txt")
    .then((response) => response.text())
    .then((cssText) => {
      cssEditor.setValue(cssText);
    })
    .catch((error) => {
      console.error("Error loading CSS demo:", error);
    });
}

// Zooming with Ctrl + Mouse Wheel
editorContainer.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
    var fontSize = parseInt(htmlEditor.container.style.fontSize) || 12;
    fontSize += (event.deltaY > 0 ? -1 : 1) * 2; // Adjust the step as needed
    fontSize = Math.max(8, Math.min(40, fontSize)); // Limit font size
    htmlEditor.setFontSize(fontSize + "px");
    cssEditor.setFontSize(fontSize + "px");
  }
});

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearEditors);

function clearEditors() {
  htmlEditor.setValue("");
  cssEditor.setValue("");
}

var applyThemeButton = document.getElementById("applyThemeButton");
applyThemeButton.addEventListener("click", applySelectedTheme);

var htmlEditor = ace.edit("editor");
var cssEditor = ace.edit("cssEditor");

// Set initial state and disable autocomplete features during page load
var toggleAutocompleteCheckbox = document.getElementById("toggleAutocomplete");
toggleAutocompleteCheckbox.checked = false;

htmlEditor.setOptions({
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
});

cssEditor.setOptions({
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
});

// Add event listener for checkbox change
toggleAutocompleteCheckbox.addEventListener("change", function () {
  var enableAutocomplete = toggleAutocompleteCheckbox.checked;

  // Enable or disable autocomplete features for HTML editor
  htmlEditor.setOptions({
    enableBasicAutocompletion: enableAutocomplete,
    enableLiveAutocompletion: enableAutocomplete,
    enableSnippets: enableAutocomplete,
  });

  // Enable or disable autocomplete features for CSS editor
  cssEditor.setOptions({
    enableBasicAutocompletion: enableAutocomplete,
    enableLiveAutocompletion: enableAutocomplete,
    enableSnippets: enableAutocomplete,
  });
});
