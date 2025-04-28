import { CharacterStats } from "./character.domain";
import { Skill } from "./skill.domain";

export class CharacterClass {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public hitDie: number,
    public primaryStat: string,
    public abilities: string[] = [], // ids de skills
  ) {}
}
