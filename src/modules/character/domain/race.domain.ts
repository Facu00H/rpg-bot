import { CharacterStats } from "./character.domain";

export class Race {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public statBonuses: Partial<CharacterStats> = {},
    public skills: string[] = [], // ids de skills
  ) {}
}
