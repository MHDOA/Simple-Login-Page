class User{
    constructor(name, pass){
        this.name = name
        this.pass = pass
    }
    Validation(pass){
        return this.pass == pass
    }
}

export default User;