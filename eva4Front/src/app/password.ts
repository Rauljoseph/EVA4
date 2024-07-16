import * as bcrypt from 'bcryptjs';
const saltRounds = 10;


export async function encryptPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;

}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
        const result = await bcrypt.compare(password, hash);
        return result;
}

