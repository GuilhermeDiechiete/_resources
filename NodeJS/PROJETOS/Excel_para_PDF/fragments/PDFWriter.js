const puppeteer = require('puppeteer');

class PDFWriter {
  static async WritePDF(filename, html) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    // Configure opções de impressão, como tamanho da página e margens
    await page.pdf({
      path: filename,
      format: 'A4',
      margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
    });

    await browser.close();

    console.log('PDF gerado com sucesso');
  }
}

module.exports = PDFWriter;