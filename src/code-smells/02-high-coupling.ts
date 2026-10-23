(() => {
    // No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date,
        ) { }
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(firstName,lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email: string,
            role: string,
            firtName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(
                email,
                role,
                new Date(),
                firtName,
                lastName,
                gender,
                birthdate
            )
        }
    }



    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'albin@google.com',
        'Admin',
        'Albin',
        'Hinostroza',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });

})()