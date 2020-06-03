export interface IEffect {
  execute(args: Array<string>): Promise<void>
}