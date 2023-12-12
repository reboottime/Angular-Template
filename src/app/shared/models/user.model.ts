export class User {
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];
  organizationId: string;

  constructor() {
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.roles = [];
    this.organizationId = '';
  }
}

export enum UserRole {
  Basic = 1,
  Developer = 2,
  Admin = 3,
}
