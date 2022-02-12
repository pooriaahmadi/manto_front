import { TeamInputs } from "../types/interfaces";
import User from "./User";

class Team {
  id: number;
  name: string;
  description?: string;
  avatar?: string;
  user: User;
  constructor({ id, name, avatar, description, user }: TeamInputs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.avatar = avatar;
    this.user = user;
  }
}

export default Team;
