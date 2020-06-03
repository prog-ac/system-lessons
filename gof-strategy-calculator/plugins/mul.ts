import { ICalc } from '../icalc'
export default class Mul implements ICalc {
  execute(a: number, b: number): number {
    return a * b
  }
}
