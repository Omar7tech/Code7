document.addEventListener("DOMContentLoaded", function () {
  // Load sample content when the page is loaded or refreshed
  loadSampleContent();

  // Add event listener to the "Demo Code" button
});

function loadSampleContent() {
  // Sample file paths
  var file1Path = "htmlstart.txt";
  var file2Path = "cssstart.txt";

  // Function to load content from a file
  function loadFileContent(filePath, editorId) {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        var editor = ace.edit(editorId);
        editor.setValue(data);
      })
      .catch((error) => console.error("Error loading file:", error));
  }

  // Load content into the HTML and CSS editors
  loadFileContent(file1Path, "editor");
  loadFileContent(file2Path, "cssEditor");
}
