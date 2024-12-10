const clearEditorBtn = document.getElementById('clear-editor-btn');
clearEditorBtn.addEventListener('click', () => {
  editor.setValue('');
});

render();