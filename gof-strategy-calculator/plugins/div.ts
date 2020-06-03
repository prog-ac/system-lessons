import { ICalc } from '../icalc'
export default class Div implements ICalc {
  execute(a: number, b: number): number {
    return a / b
  }
}
