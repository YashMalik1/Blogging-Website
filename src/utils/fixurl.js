const httpToHttps = (url) => {
    let newUrl = url.replace('http://', 'https://');
    if (!newUrl.includes('https://')) {
        newUrl = 'https://' + newUrl
    }
    return newUrl
}

export default httpToHttps