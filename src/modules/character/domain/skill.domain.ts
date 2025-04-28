export class Skill {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public requiredLevel: number = 1,
    public classRestriction?: string,
    public raceRestriction?: string,
    public effects?: any,
  ) {}
}