declare module "html2pdf.js" {
  interface Html2Pdf {
    (element: HTMLElement | string): Html2Pdf;
    from(element: HTMLElement | string): Html2Pdf;
    set(options: object): Html2Pdf;
    save(filename?: string): Promise<void>;
    outputPdf(): Promise<Blob>;
  }
  const html2pdf: Html2Pdf;
  export default html2pdf;
}
