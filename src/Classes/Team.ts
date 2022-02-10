import { TeamInputs } from "../types/interfaces";

class Team {
  id: number;
  name: string;
  description?: string;
  avatar?: string;
  constructor({ id, name, avatar, description }: TeamInputs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.avatar = avatar;
  }
}

export default Team;
