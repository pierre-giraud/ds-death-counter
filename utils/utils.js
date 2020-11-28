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

export function getPlayers(){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    return fetch(`${baseApiUrl}/player`).then((response) => {
        if (response.status !== 200) {
            return null;
        }

        return response.json();
    });
}

export function getBosses(){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    return fetch(`${baseApiUrl}/boss`).then((response) => {
        if (response.status !== 200) {
            return null;
        }

        return response.json();
    });
}

export function getEntity(type, name){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    // Récupération de l'entité correspondant
    return fetch(`${baseApiUrl}/${type}/${name}`).then((response) => {
        if (response.status !== 200){
            return null;
        }

        return response.json();
    });
}

export function getEntities(type){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    // Récupération de l'entité correspondant
    return fetch(`${baseApiUrl}/${type}`).then((response) => {
        if (response.status !== 200){
            return null;
        }

        return response.json();
    });
}

export function insertEntity(type, name){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;

    // Création des options de la requête POST
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
    };

    // Insertion d'une nouvelle entité
    return fetch(`${baseApiUrl}/${type}`, options).then((response) => {
        if (response.status !== 200){
            return null;
        }

        return response.json();
    });
}

export async function getBattle(pid, bid){
    const { origin } = absoluteUrl();
    const baseApiUrl = `${origin}/api`;
    const battleAPI = await fetch(`${baseApiUrl}/battle/${pid}/${bid}`);
    return await battleAPI.json();
}