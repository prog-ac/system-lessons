import { ICalc } from '../icalc'
export default class Add implements ICalc {
  execute(a: number, b: number): number {
    return a + b
  }
}
