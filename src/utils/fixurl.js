const httpToHttps = (url) => {
    let newUrl = url.replace('http://', 'https://')
    return newUrl
}