
    //Fetch封装的Post函数,用于当body格式为对象格式时的函数:
const fetchPost = (url,options) => {
    initObj={
        method:'POST',
        credentials: 'include',
        headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body:JSON.stringify(options)
    }
    return fetch(url,initObj).then((response) => response.text())
    .then((responseText) => {
        const json = JSON.parse(responseText);
        return json;
    })
    .catch((error) => {
        console.error(error);
    })
}

export default fetchPost;