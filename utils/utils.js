/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
export function absoluteUrl(req, setLocalhost) {
    let protocol = 'https:';
    let host = req
        ? req.headers['x-forwarded-host'] || req.headers['host']
        : window.location.host;
    if (host.indexOf('localhost') > -1) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http:';
    }
    return {
        protocol: protocol,
        host: host,
        origin: protocol + '//' + host,
        url: req,
    };
}

export async function resetDatabase(){
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    // Insertion d'une nouvelle entrée
    await fetch(`${baseApiUrl}/reset`, options);
}

export async function getPlayers(){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;
    const playersAPI = await fetch(`${baseApiUrl}/player`);
    return await playersAPI.json();
}

export async function getBosses(){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;
    const bossesAPI = await fetch(`${baseApiUrl}/boss`);
    return await bossesAPI.json();
}

export async function getBattle(pid, bid){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;
    const battleAPI = await fetch(`${baseApiUrl}/battle/${pid}/${bid}`);
    return await battleAPI.json();
}