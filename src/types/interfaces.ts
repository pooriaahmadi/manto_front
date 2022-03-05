import { NamedTupleMember } from "typescript";
import Team from "../Classes/Team";
import User from "../Classes/User";

export interface HeaderItemInputs {
  link: string;
  content: string;
}

export interface InputInputs {
  type: string;
  placeholder: string;
  title: string;
  maxLength: number;
  handleOnChange: any;
  value: any;
}

export interface inputs {
  title: string;
  handleOnChange: any;
  value: any;
  error?: boolean;
  required?: boolean;
}

export interface EmailInputs extends inputs {
  placeholder: string;
}
export interface SelectInputs extends inputs {
  options: string[];
}
export interface PasswordInputs extends inputs {
  placeholder: string;
}
export interface TextInputs extends inputs {
  placeholder: string;
  maxLength: number;
}
export interface SubmitInputs {
  value: string;
}
export interface UserInputs {
  endpoint: string;
  id?: number;
  username?: string;
  email?: string;
  permissions?: number;
  token?: string;
  verified?: boolean;
  verificationToken?: string;
  preferredName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface LoginInputs {
  user: User;
  setUser: any;
  message?: string;
  update: boolean;
  setUpdate: any;
}
export interface HeaderInputs {
  user: User;
}
export interface RegisterInputs extends LoginInputs {}
export interface ErrorInputs {
  content: string;
}
export interface TeamInputs {
  id: number;
  name: string;
  description?: string;
  avatar?: string;
  owners: User[];
  currentUser: User;
}
export interface TeamClassInputs {
  id: number;
  name: string;
  description?: string;
  avatar?: string;
  owners: User[];
}
export interface ManageTeamInputs {
  user: User;
}
export interface CommentBoxInputs {
  hintName: string;
  hintColor: string;
  comments: any[];
  setComments: any;
  user: User;
  handleHintClick: any;
}
export interface TeamComponentInputs {
  user: User;
}
export interface CommentInputs {
  id: number;
  author: User;
  title: string;
  content: string;
  team?: Team;
  user?: User;
  handleDeleteComment: any;
}
export interface NewCommentInputs {
  currentUser: User;
}
export interface NewTeamCommentInputs extends NewCommentInputs {
  team: Team;
}
export interface TeamCommentInputs {
  user: User;
}
export interface MatchesInputs {
  user: User;
  teamId: number;
}
export interface teamJSON {
  id: number;
  name: string;
  description: string;
  avatar: string;
}
export interface MatchInputs {
  id: number;
  handleDelete: any;
}
export interface MatchViewInputs {
  user: User;
}
export interface CategoriesInputs {
  user: User;
  match_id: any;
}
export interface CategoryInputs {
  id: number;
  title: string;
  user: User;
  match_id: number;
}
export enum PropertyTypes {
  boolean = 0,
  string = 1,

  number = 3,
}
export interface PropertyInputs {
  id: number;
  title: string;
  type: any;
  user: User;
  match_id: number;
}
export interface PropertiesInputs {
  category_id: number;
  user: User;
  match_id: number;
}
export interface AnswerInputs {
  type: PropertyTypes;
  answer: any;
}
export interface AnalyticsInputs {
  user: User;
}
