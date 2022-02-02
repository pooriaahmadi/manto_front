import { json } from "stream/consumers";
import { UserInputs } from "../types/interfaces";

class User {
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
  constructor({
    endpoint,
    createdAt,
    email,
    id,
    permissions,
    preferredName,
    token,
    updatedAt,
    username,
    verificationToken,
    verified,
  }: UserInputs) {
    this.endpoint = endpoint;
    this.id = id;
    this.username = username;
    this.email = email;
    this.permissions = permissions;
    this.token = token;
    this.verified = verified;
    this.verificationToken = verificationToken;
    this.preferredName = preferredName;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  login = async ({
    username,
    email,
    password,
  }: {
    username?: string;
    email?: string;
    password: string;
  }) => {
    const body: { [key: string]: any } = {
      password: password,
    };
    if (username) {
      body.username = username;
    } else {
      body.email = email;
    }
    const response = await fetch(this.endpoint + "/auth/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      method: "post",
    });
    const data = await response.json();
    return [response, data];
  };
}
export default User;
