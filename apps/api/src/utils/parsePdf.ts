import { PDFParse } from "pdf-parse";

async function parsePdf(buffer: Buffer): Promise<string> {
  const unit8 = new Uint8Array(buffer);
  const parser = new PDFParse(unit8);
  const data = await parser.getText();
  return data.text;
}
export default parsePdf;
