async function ApiCall (url) {
    const res = await fetch(url)
    const json = await res.json()
    return json;
}

export default ApiCall;