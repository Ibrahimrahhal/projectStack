import CryptoJS from "crypto-js";
import { environment } from './../environments/environment';


export function encryptData(data){
  if(typeof data == typeof 'string')
    return CryptoJS.AES.encrypt(data, environment.encryptKey).toString();
  else
    return CryptoJS.AES.encrypt(JSON.stringify(data), environment.encryptKey).toString();
}

export function decryptData(data){
  return CryptoJS.AES.decrypt(data, environment.encryptKey).toString(CryptoJS.enc.Utf8);
}
