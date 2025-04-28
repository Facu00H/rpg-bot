import { Skill } from "./skill.domain";

export interface EmbeddedStatus {
  id: string;
  status: "active" | "inactive";
}

export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export class Character {
  constructor(
    public id: string,
    public name: string,
    public level: number = 1,
    public experience: number = 0,
    public stats: CharacterStats,
    public races: EmbeddedStatus[], 
    public classes: EmbeddedStatus[], 
    public unlockedSkills: string[] = [], 
  ) {}

  assignSkills(allSkills: Skill[]) {
    const activeRaceIds = this.races.filter(r => r.status === "active").map(r => r.id);
    const activeClassIds = this.classes.filter(c => c.status === "active").map(c => c.id);
    this.unlockedSkills = allSkills
      .filter(skill =>
        (skill.raceRestriction && activeRaceIds.includes(skill.raceRestriction) && skill.requiredLevel <= this.level) ||
        (skill.classRestriction && activeClassIds.includes(skill.classRestriction) && skill.requiredLevel <= this.level)
      )
      .map(skill => skill.id);
  }
}
