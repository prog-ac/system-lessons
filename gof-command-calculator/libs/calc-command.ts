export default class CalcCommand {
  num: number
  constructor(n: number) {
    this.num = n
  }

  get operator(): string {
    return '';
  }

  calc(arg: number): number {
    return this.num;
  }
}