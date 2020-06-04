import CalcCommand from '~/libs/calc-command'
export default class CalcCommandMul extends CalcCommand {

  get operator(): string {
    return '*';
  }

  calc(arg: number): number {
    return arg * this.num;
  }
}