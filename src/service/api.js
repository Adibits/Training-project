import axios from 'axios'
import { getHeadersandParams } from '../utils/common-utils';

export const getData = async (formData, jsonText, paramData, headerData) => {
    const apiType=formData.type.toLowerCase();
    const apiURL=formData.url;
    const apiHeaders=getHeadersandParams(headerData);
    const apiParams=getHeadersandParams(paramData);
    console.log(apiHeaders);
    try {
        
        return await axios({
            method: apiType,
            url:apiURL,
            body: jsonText,
            headers:apiHeaders,
            params:apiParams
        })
        
        
    } catch (error) {
        console.log('error',error);
        return 'error';
    }
}