const copyHtmlBtn = document.getElementById('copy-html-btn');
copyHtmlBtn.addEventListener('click', async () => {
  try {
    const range = document.createRange();
    range.selectNodeContents(htmlOutput);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    showSnackbar('Rendered content copied to clipboard!', 'success');
  } catch (err) {
    console.error('Failed to copy: ', err);
    showSnackbar('Failed to copy content. Please try again.', 'error');
  }
});

const pasteHtmlBtn = document.getElementById('paste-html-btn');
pasteHtmlBtn.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    const editor = CodeMirror.fromTextArea(document.getElementById('editor'));
    const doc = editor.getDoc();
    const cursor = doc.getCursor();
    doc.replaceRange(text, cursor);
    showSnackbar('Content pasted from clipboard!', 'success');
  } catch (err) {
    console.error('Failed to paste: ', err);
    showSnackbar('Failed to paste content. Please try again.', 'error');
  }
});