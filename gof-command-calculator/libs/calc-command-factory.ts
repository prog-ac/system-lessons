import CalcCommand from '~/libs/calc-command'
import CalcCommandAdd from '~/libs/calc-command-add'
import CalcCommandDiv from '~/libs/calc-command-div'
import CalcCommandSub from '~/libs/calc-command-sub'
import CalcCommandMul from '~/libs/calc-command-mul'
export default class CalcCommandFactory {
  static createCommand(operator: string, num: number): CalcCommand {
    switch (operator) {
      case '+':
        return new CalcCommandAdd(num)
      case '-':
        return new CalcCommandSub(num)
      case '*':
        return new CalcCommandMul(num)
      case '/':
        return new CalcCommandDiv(num)
      default:
        return new CalcCommand(num)
    }
  }
}