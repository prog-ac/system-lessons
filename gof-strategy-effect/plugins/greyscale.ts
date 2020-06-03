import { IEffect } from '../ieffect'
import sharp from 'sharp';
export default class GreyScale implements IEffect {
  async execute(args: Array<string>): Promise<void> {
    await sharp(args[1])
      .greyscale().toFile(args[2])
  }
  getDescription() {
    return '白黒変換\tgreyscale inputfile outputfile'
  }
}
