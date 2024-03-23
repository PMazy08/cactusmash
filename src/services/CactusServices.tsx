import axios from "axios";
// import { CacGetUser } from "../models/CacGetUser";
import { UserphotoGetResponse } from "../models/UserphotoGetResponse";
import { PhotoGetResponse } from "../models/PhotoGetResponse";
import { PhototoptenGetResponse } from "../models/PhototoptenGetResponse";
import { UsersGetRasponse } from "../models/UsersGetResponse";
import { UserallphotoGetResponse } from "../models/UserallphotoGetResponse";
import { UserprofileGetRasponse } from "../models/UserprofileGetResponse";


// server-localhost
const HOST: string = "http://localhost:3000";

// server-deploy
// const HOST: string = "https://cactusmash.onrender.com";




export class CactusServices{

    // login 
    async getUser(email: string, password: string) {
        const body = {
            email: email,
            password: password
        };
    
        const url = HOST + "/users/login";
        try {
            const response = await axios.post(url, body);
            
            if (response.data !== null && response.data.length > 0) {
                const userData = response.data[0];
                console.log(userData);
    
                localStorage.setItem('userId', userData.id.toString());
                localStorage.setItem('username', userData.username);
                localStorage.setItem('role', userData.role);
                localStorage.setItem('avatar', userData.avatar);
                return userData;
            } else {
                alert("email หรือ รหัสผ่าน ไม่ถูกต้อง")
            }
        } catch (error) {
            console.error("Error while fetching user:", error);
            return null;
        }
    }


    // register
    async register(username: string, email: string, password: string) {
        const body = {
            username: username,
            email: email,
            password: password
        };
        const url = HOST + "/user/register";
        const response = await axios.post(url, body);
        console.log(response);
        
        return response;
    }


    // get photo by u_id for profile
    async getPhoto_u(u_id: string) {
        const url = HOST + `/photo/${u_id}`;
        const response = await axios.get(url);
        const photos : UserphotoGetResponse[] = response.data;
        // console.log(photos);
        return photos;
      }


    // get photo by u_id for profile users
    async getUserPhoto(u_id: string) {
        const url = HOST + `/photo/${u_id}`;
        const response = await axios.get(url);
        const photos : UserallphotoGetResponse[] = response.data;
        // console.log(photos);
        return photos;
      }
    
    // get all photos
    async getAllphoto(){
        const url = HOST + `/photo/`;
        const response = await axios.get(url);
        const allphotos: PhotoGetResponse[] = response.data;
        // console.log(response.data);
        return allphotos;
    }

    // get top 10 photos
    async getToptenphoto(){
        const url = HOST + `/photo/top10`;
        const response = await axios.get(url);
        const allphotos: PhototoptenGetResponse[] = response.data;
        // console.log(response.data);
        return allphotos;
    }

    // get all users 
    async getallusers(){
        const url = HOST + `/users`;
        const response = await axios.get(url);
        const allusers: UsersGetRasponse[] = response.data;
        // console.log(response.data);
        return allusers;
    }


    // get users by id
    async getUserpro(u_id: string){
        const url = HOST + `/users/`+u_id;
        const response = await axios.get(url);
        const allusers: UserprofileGetRasponse[] = response.data;
        console.log(response.data);
        return allusers;
    }
}