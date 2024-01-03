import axios from 'axios'
import { getHeadersandParams } from '../utils/common-utils';

export const getData = async (formData, jsonText, paramData, headerData) => {
    const apiType=formData.type;
    const apiURL=formData.url;
    const apiHeaders=getHeadersandParams(headerData);
    const apiParams=getHeadersandParams(paramData);
    try {
        console.log(jsonText);
        const config = {
            method:apiType,
            url:apiURL,
            headers:apiHeaders,
            params:apiParams
        }
        if(apiType==='POST' || apiType==='PUT') {
            config.data=JSON.parse(jsonText);
        }
        console.log(config);
        return await axios(config);
        
    } catch (error) {
        console.log('error',error);
        return 'error';
    }
}