export interface registerInput {
    name:string;
    email:string;
    password:string
}

export interface registererror {
    name:boolean;
    email:boolean;
    password:boolean
}


export interface loginInput {
    email:string;
    password:string
}

export interface loginerror {
    email:boolean;
    password:boolean;
    emailerrorMsg:string;
    pwderrorMsg:string;
}


export interface resetpwd {
    email:string;
    password:string;
    otp:string;
}

export interface resetemailerror {
    email:boolean;
}

export interface optInput {
    one:string;
    two:string;
    three:string;
    four:string;
    five:string;
    six:string
} 
