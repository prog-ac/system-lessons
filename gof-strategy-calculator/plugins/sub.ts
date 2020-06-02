import { ICalc } from '../icalc'
export default class Sub implements ICalc {
  execute(a: number, b: number): number {
    return a - b
  }
}
