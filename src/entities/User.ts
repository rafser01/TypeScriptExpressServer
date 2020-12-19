

class User {

    public firstName: string;
    public lastName: string;
    public clientId: string;

    constructor(firstName: string, lastName: string, clientId: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.clientId = clientId;
        
    }
}

export default User;
