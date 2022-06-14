import getSid from './sid';

async function apiCall<T>(apiName: string, body: string): Promise<T> {
    console.log(body);
    const data = await fetch(`https://ewserver.di.unimi.it/mobicomp/treest/${apiName}.php`,{
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: body
    })
    return data.json();
}


export default async function handleApiCall<T, K>(apiName: string, toSend?: ToSend): Promise<T | null> {
    const apiData = await getSid()
        .then(sid => toSend 
            ? apiCall<T>( apiName, JSON.stringify({sid,...toSend}) )
            : apiCall<T>( apiName, JSON.stringify({sid}) ))
        .catch(err => {
            console.log(err);
            return null;
        });
    return apiData;
}

interface ToSend {
    did?: number,
    name?: string,
    picture?: string,
    delay?: number,
    status?: number,
    comment?: string,
    uid?: string
}