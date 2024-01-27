
document.addEventListener('DOMContentLoaded', function () {
    var themeSelect = document.getElementById('themeSelect');
    function applySelectedTheme() {
        var selectedTheme = themeSelect.value;
        setEditorTheme(selectedTheme, "editor");
        setEditorTheme(selectedTheme, "cssEditor");
    }
    function setEditorTheme(theme, editorId) {
        var editor = ace.edit(editorId);
        editor.setTheme("ace/theme/" + theme);
    }
    themeSelect.value = "chaos";
    applySelectedTheme();
    themeSelect.addEventListener('change', applySelectedTheme);
});