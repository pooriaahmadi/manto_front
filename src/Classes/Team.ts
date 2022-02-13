import { TeamClassInputs, TeamInputs } from "../types/interfaces";
import User from "./User";

class Team {
  id: number;
  name: string;
  description?: string;
  avatar?: string;
  owners: User[];
  constructor({ id, name, avatar, description, owners }: TeamClassInputs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.avatar = avatar;
    this.owners = owners;
  }
}

export default Team;
