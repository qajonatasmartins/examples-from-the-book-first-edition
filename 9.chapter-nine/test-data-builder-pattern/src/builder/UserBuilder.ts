import { faker } from "@faker-js/faker";

export interface UserData {
  id: string;
  name: string;
  email: string;
  age: number;
}

export class UserBuilder {
  private user: UserData;

  constructor() {
    this.user = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
    };
  }

  withName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  withAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }

  build(): UserData {
    return this.user;
  }
}
