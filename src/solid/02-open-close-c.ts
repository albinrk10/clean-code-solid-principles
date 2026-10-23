//import axios from 'axios';

export class HttpClient{

    // async get(url:string){
    //  const {data,status} =await axios.get(url);
    //  return {data,status};
    // }
    //patron adaptador - respetamos en open and closed 
    async get(url:string){
        const resp = await fetch(url);
        const data = await resp.json();
        return { data, status: resp.status};
    }

}