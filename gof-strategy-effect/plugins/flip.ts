import { IEffect } from '../ieffect'
import sharp from 'sharp';
export default class Flip implements IEffect {
  async execute(args: Array<string>): Promise<void> {
    await sharp(args[1])
      .flip().toFile(args[2])
  }
  getDescription() {
    return '反転\tflip inputfile outputfile'
  }
}
