(() => {
  //Aplicamos principio de responsabilidad única
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
   
  }

  class User  {
    public email: string;
    public lasAccess: Date;
    public role: string;
    constructor(
      {
        email,
        role,
        
      }: UserProps
    ) {
      this.lasAccess = new Date();
      this.email = email;
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }

  //3
  interface SettingsProps {
    lastOpenFolder: string,
    workingDirectory: string,
  }
  class Settings  {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor(
      {
        lastOpenFolder,
        workingDirectory,
      }: SettingsProps
    ) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
  }
   interface UseSettingsProps {
    birthdate: Date
    email: string,
    gender: Gender,
    lastOpenFolder: string,
    name: string,
    role: string,
    workingDirectory: string,
  }

  class UserSettings {
     public person:Person;
     public user : User; 
     public settings : Settings;
     constructor(
      {
      name,gender,birthdate,
      email, role,
      lastOpenFolder, workingDirectory
      }:UseSettingsProps
     ){
      this.person = new Person({name, gender,birthdate});
      this.user = new User({email, role});
      this.settings = new Settings({lastOpenFolder, workingDirectory});

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
  console.log({ userSettings });
})();