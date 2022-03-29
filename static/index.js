const form = document.querySelector('form');
const input = document.querySelector('input');

const byteQuery = new URLSearchParams(window.location.search);
var byteQueryURL = byteQuery.get("url");

window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
}).then(() => {
    let url = byteQueryURL;
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
