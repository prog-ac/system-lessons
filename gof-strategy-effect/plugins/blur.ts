import { IEffect } from '../ieffect'
import sharp from 'sharp';
export default class Blur implements IEffect {
  async execute(args: Array<string>): Promise<void> {
    await sharp(args[1])
      .blur(Number(args[3])).toFile(args[2])
  }
  getDescription() {
    return 'ぼかし\tblur inputfile outputfile param'
  }
}
