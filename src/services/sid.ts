import AsyncStorage from '@react-native-async-storage/async-storage';
import { Sid } from '../interfaces/ISid';

async function setSid(sid: string){
    try {
        await AsyncStorage.setItem('sid', sid);
    } catch (e) {
        console.log(e);
    }
}

//get the sid from device memory
export default async function getSid() {
    try {
        const value = await AsyncStorage.getItem('sid');
        if(value !== null) {
            return value;
        }else{
            // const sid = '6Lu9kwlLO6okf5DE';
            return requestSid().then(json => {
                const sid = json.sid;
                setSid(sid);
                return sid;
            }); //save sid in local
        }
    } catch(e) {
        console.error(e);
    }
}

//register call
async function requestSid(): Promise<Sid> {
    const sidResponse = await fetch(`https://ewserver.di.unimi.it/mobicomp/treest/register.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        }
    })
    return sidResponse.json();
}

// clean() 
export async function clean(){
    try {
      await AsyncStorage.removeItem('sid')
    } catch(e) {
      console.error(e);
    }
}
