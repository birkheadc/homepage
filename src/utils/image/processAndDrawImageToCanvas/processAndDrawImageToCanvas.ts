import { ImageProcessShaderEffect } from "../../../types/image/imageProcessShaderEffect";
import { ImageProcessShaderMode } from "../../../types/image/imageProcessShaderMode";
import drawImageToCanvas from "../drawImageToCanvas/drawImageToCanvas";
import processCanvas from "../processCanvas/processCanvas";

export default async function processAndDrawImageToCanvas(image: HTMLImageElement, canvas: HTMLCanvasElement, colors: string[], pixelateLevel: number, shaderMode: ImageProcessShaderMode, effect?: ImageProcessShaderEffect): Promise<void> {
  drawImageToCanvas(image, canvas, pixelateLevel);
  processCanvas(canvas, colors, shaderMode, effect);
}