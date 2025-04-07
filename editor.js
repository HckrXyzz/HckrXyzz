const htmlCode = document.getElementById('textareaCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const previewFrame = document.getElementById('iframe');

function updatePreview() {
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(textareaCode.value);
    iframeDoc.close();
const formattedHTML = html_beautify(textareaCode.value, {
    indent_size: 4
});
    const formattedJS = html_beautify(jsCode, {
        indent_size: 4
    });
    const formattedCSS = html_beautify(cssCode, {
        indent_size: 4
    });
    document.getElementById('textareaCode').value = formattedHTML;
    document.getElementById('cssCode').value = formattedCSS;
    document.getElementById('jsCode').value = formattedJS;

}
function copyCode() {
    navigator.clipboard.writeText(textareaCode.value)
        .then(() => {
            alert('HTML code copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
};

function downloadHtml() {
    const title = document.querySelector('title') ? document.querySelector('title').innerText : 'download';
    const fullHtml = `
<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
    <style>
        ${cssCode.value}
    </style>
</head>
<body>
    ${textareaCode.value}
    <script>
        ${jsCode.value}
    </script>
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.html`;
    a.click();
    URL.revokeObjectURL(url);
}
