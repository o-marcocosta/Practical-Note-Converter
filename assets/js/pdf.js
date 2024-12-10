const generatePdfBtn = document.getElementById('generate-pdf-btn');
generatePdfBtn.addEventListener('click', () => {
  generatePdfBtn.disabled = true;
  generatePdfBtn.classList.add('loading');
  generatePdfBtn.innerText = '';

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Print PDF</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div id="html-output">
          ${document.getElementById('html-output').innerHTML}
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();

  printWindow.onload = () => {
    printWindow.print();
    printWindow.close();
    generatePdfBtn.disabled = false;
    generatePdfBtn.classList.remove('loading');
    generatePdfBtn.innerText = 'PDF';
  };
});