import { create } from "domain";
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
  loggedIn: boolean = false;
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
  register = async ({
    username,
    password,
    email,
    preferredName,
  }: {
    username: string;
    password: string;
    email: string;
    preferredName?: string;
  }): Promise<[Response, any]> => {
    const response = await fetch(`${this.endpoint}/users/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        preferredName,
      }),
      method: "post",
    });
    const data = await response.json();
    return [response, data];
  };
  login = async ({
    username,
    email,
    password,
  }: {
    username?: string;
    email?: string;
    password: string;
  }): Promise<[Response, any]> => {
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
  fetchData = async (): Promise<[Response, any]> => {
    const response = await fetch(this.endpoint + "/users/" + this.token);
    const data = await response.json();
    return [response, data];
  };
  copy = (): User => {
    return new User({
      endpoint: this.endpoint,
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      permissions: this.permissions,
      preferredName: this.preferredName,
      token: this.token,
      updatedAt: this.updatedAt,
      username: this.username,
      verificationToken: this.verificationToken,
      verified: this.verified,
    });
  };
}
export default User;
