

var toggleAutocompleteCheckbox = document.getElementById('toggleAutocomplete');
toggleAutocompleteCheckbox.checked = false;

htmlEditor.setOptions({
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false
});

cssEditor.setOptions({
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    enableSnippets: false
});

// Add event listener for checkbox change
toggleAutocompleteCheckbox.addEventListener('change', function () {
    var enableAutocomplete = toggleAutocompleteCheckbox.checked;

    // Enable or disable autocomplete features for HTML editor
    htmlEditor.setOptions({
        enableBasicAutocompletion: enableAutocomplete,
        enableLiveAutocompletion: enableAutocomplete,
        enableSnippets: enableAutocomplete
    });

    // Enable or disable autocomplete features for CSS editor
    cssEditor.setOptions({
        enableBasicAutocompletion: enableAutocomplete,
        enableLiveAutocompletion: enableAutocomplete,
        enableSnippets: enableAutocomplete
    });
});
