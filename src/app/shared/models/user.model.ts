export class User {
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];

  constructor() {
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.roles = [];
  }
}

export enum UserRole {
  Basic = 1,
  Developer = 2,
  Admin = 3,
}
