(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor(
      {
        name, gender, birthdate
      }: PersonProps
    ) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }

  }
  // 2
  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lasAccess: Date;
    constructor(
      {
        email,
        role,
        name,
        gender,
        birthdate
      }: UserProps
    ) {
      super({ name, gender, birthdate });
      this.lasAccess = new Date();
      this.email = email;
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }

  //3
  interface UseSettingsProps {
    birthdate: Date
    email: string,
    gender: Gender,
    lastOpenFolder: string,
    name: string,
    role: string,
    workingDirectory: string,
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor(
      {
        birthdate,
        email,
        gender,
        lastOpenFolder,
        name,
        role,
        workingDirectory,
      }: UseSettingsProps
    ) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
  }
  const userSettings = new UserSettings(
    {
      birthdate: new Date('1996-10-14'),
      email: 'albin@google.com',
      gender: 'M',
      lastOpenFolder: '/home',
      name: 'Albin',
      role: 'Admin',
      workingDirectory: '/usr/home',
    }
  );
  console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
})();