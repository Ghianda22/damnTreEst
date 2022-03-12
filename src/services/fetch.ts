import getSid from './sid';

async function apiCall<T>(apiName: string, body: string): Promise<T> {
    const data = await fetch(`https://ewserver.di.unimi.it/mobicomp/treest/${apiName}.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: body
    })
    return data.json();
}


export default async function handleApiCall<T, K>(apiName: string, toSend?: K): Promise<T | null> {
    const apiData = await getSid()
        .then(sid => toSend 
            ? apiCall<T>( apiName, JSON.stringify({...toSend, sid}) )
            : apiCall<T>( apiName, JSON.stringify({sid}) ))
        .catch(err => {
            console.log(err);
            return null;
        });
    return apiData;
}