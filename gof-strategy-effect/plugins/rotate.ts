import { IEffect } from '../ieffect'
import sharp from 'sharp';
export default class Rotate implements IEffect {
  async execute(args: Array<string>): Promise<void> {
    await sharp(args[1])
      .rotate(Number(args[3])).toFile(args[2])
  }
  getDescription() {
    return '回転\trotate inputfile outputfile param'
  }
}
