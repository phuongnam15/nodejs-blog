import db from '../models'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken';
require('dotenv').config();

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({name, email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where : {email},
            defaults : {
                name : name,
                email : email,
                password : hashPassword(password)
            }
        })
        const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email}, process.env.JWT_SECRET, {expiresIn : '1h'}) : null;
        resolve({
            err : response[1] ? 0 : 1,
            mes : response[1] ? 'Register successfully' : 'Email existed',
            "bearer_token" : token ? token : null

        })
    } catch (error) {
        reject (error);
    }
});
export const login = ({email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where : {email},
            raw : true // set trả về dạng object thuần - không phải đạng instance
        })
        
        const isChecked = response && bcrypt.compareSync(password, response.password); // nếu response = null thì bằng response nếu k thì = vế sau 
        const token = isChecked ? jwt.sign({id: response.id, email: response.email}, process.env.JWT_SECRET, {expiresIn : '1h'}) : null;
        resolve({
            err : token ? 0 : 1,
            mes : token ? "Login Successfully" : response ? "Password is wrong" : "Email is wrong",
            "bearer_token" : token ? token : null
        })
    } catch (error) {
        reject (error);
    }
});