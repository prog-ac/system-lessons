import { ICalc } from "./icalc"

const mode = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

async function main() {
  const plugin = await import(`./plugins/${mode}`)
  const calc: ICalc = new plugin.default()
  console.log(calc.execute(a, b))
}
main()
