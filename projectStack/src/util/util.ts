import CryptoJS from "crypto-js";
import { environment } from './../environments/environment';


export function encryptData(data:string|Object|String):string{
  if(environment.disableEncryption)
    return data as any;
  if(typeof data == typeof 'string')
    return CryptoJS.AES.encrypt(data, environment.encryptKey).toString();
  else
    return CryptoJS.AES.encrypt(JSON.stringify(data), environment.encryptKey).toString();
}

export function decryptData(data:string|String):string{
  if(environment.disableEncryption)
    if(typeof data == typeof {})
      return JSON.stringify(data);
    else
      return data as any;
  return CryptoJS.AES.decrypt(data, environment.encryptKey).toString(CryptoJS.enc.Utf8);
}

export async function stringToBase64(str:string|String):Promise<string>{
  return new Promise((resolve, reject)=>{
    var reader = new FileReader();
    let stri = str as string;
    reader.readAsDataURL(new Blob([stri]));
    reader.onloadend = function() {
        resolve(reader.result.toString().split(',')[1]);
    }
  });
}
window["stringToBase"] = stringToBase64;
