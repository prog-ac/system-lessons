import { IEffect } from '../ieffect'
import { default as glob } from 'glob-promise'
import { default as path } from 'path'
export default class Help implements IEffect {
  async execute(args: Array<string>): Promise<void> {
    const files = await glob('plugins/*')
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const bn = path.basename(file)
      const plugin = await import(`./${bn}`)
      const effect: IEffect = new plugin.default()
      console.log(`${effect.getDescription()}`)
    }
  }
  getDescription() {
    return 'ヘルプを表示\thelp'
  }
}

// import { IEffect } from '../ieffect'
// import { default as glob } from 'glob-promise'
// import { default as path } from 'path'
// export default class Help implements IEffect {
//   async execute(args: string[]) {
//     const files = await glob("./*");
//     for (let file of files) {
//       const name = path.basename(file)
//       const plugin = await import(`./${name}`)
//       const effect: IEffect = await new plugin.default()
//       effect.getDescription()
//     }
//   }
//   getDescription() {
//     return "ヘルプを表示/t help"
//   }
// }
