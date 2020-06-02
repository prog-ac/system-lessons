import { IEffect } from './ieffect'

const mode = process.argv[2]
const args = process.argv.slice(2)

async function main() {
  const plugin = await import(`./plugins/${mode}`)
  const effect: IEffect = new plugin.default()
}
main()
