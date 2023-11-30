const httpToHttps = (url) => {
    console.log(url)
    if (!url) {
        return null
    }
    let newUrl = url.replace('http://', 'https://');
    if (!newUrl.includes('https://')) {
        newUrl = 'https://' + newUrl
    }
    console.log(newUrl);
    return newUrl
}

export default httpToHttps