export interface IEffect {
  getDescription(): string
  execute(args: Array<string>): Promise<void>
}