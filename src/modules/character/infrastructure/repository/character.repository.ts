import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CharacterDocument, CharacterEnitity } from "../database/character.entity";
import { Model } from "mongoose";
import { BaseRepository } from "src/modules/shared/infrastructure/repository/base.repository";
import { Character } from "../../domain/character.domain";

@Injectable()
export class CharacterRepository extends BaseRepository<Character, CharacterEnitity> {
  constructor(
    @InjectModel(CharacterEnitity.name) readonly model: Model<CharacterEnitity>
  ) {
    super(model);
  }

  toDomain(document: CharacterDocument): Character {
    const newCharacter = Object.assign(Character, document);

    return newCharacter;


    return {
      id: document._id.toString(),
      name: document.name,
      level: document.level,
      experience: document.experience,
      stats: document.stats,
      races: document.races,
      classes: document.classes,
      unlockedSkills: document.unlockedSkills,
    }
  }

  toDocument(entity: Character): CharacterEnitity {
    return {} as any
  }
}