const htmlOutput = document.getElementById('html-output');

const render = () => {
  const markdownText = editor.getValue();
  const htmlContent = marked.parse(markdownText);
  htmlOutput.innerHTML = htmlContent;
  hljs.highlightAll();
};

editor.on('change', render);