function generateSlug() {
    let inputText = document.getElementById('inputText').value;

    // Convert to lowercase, remove special characters, and replace spaces and periods with hyphens
    let slug = inputText
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-.]/g, '')   // Remove special characters but keep spaces and periods
        .replace(/[.\s]+/g, '-')         // Replace spaces and periods with hyphens

    document.getElementById('outputSlug').value = slug;
}

function copySlug() {
    let slugField = document.getElementById('outputSlug');
    slugField.select();
    slugField.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the slug to the clipboard
    document.execCommand("copy");

    // Display a short alert to confirm slug was copied
    alert("Slug copied to clipboard: " + slugField.value);
}