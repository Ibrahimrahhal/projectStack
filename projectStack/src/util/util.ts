import { Observable, Subject } from 'rxjs';
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

export function trimText(text:string, numberOfWords:number){
  return (text || "").split(" ").filter((word,index)=>index<numberOfWords).join(" ");
}


export function convertObservableReturnTypeFromArrayToSingleRespond(input:Observable<any[]>):Observable<any>{
  let sub = new Subject<any>();
  input.subscribe(x=>x.forEach(subX=>sub.next(subX)), (e)=>{sub.error(e)}, ()=>sub.complete());
  return sub.asObservable();
}
window["stringToBase"] = stringToBase64;
