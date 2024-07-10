import * as bcrypt from 'bcryptjs';
const saltRounds = 10;


export function encryptPassword(password: string){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
    
}

export function comparePassword(password:string,hash:string){
    const result = bcrypt.compareSync(password, hash);
    return result
}