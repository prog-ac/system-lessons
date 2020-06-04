import CalcCommand from '~/libs/calc-command'
export default class CalcCommandDiv extends CalcCommand {

  get operator(): string {
    return '/';
  }

  calc(arg: number): number {
    return arg / this.num;
  }
}