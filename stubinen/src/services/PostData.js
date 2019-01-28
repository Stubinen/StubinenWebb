export function PostData(type, userData) {
    let BaseURL = 'http://192.168.0.100/Stubinen/';
    let EndURL = '.php';

    return new Promise((resolve, reject) =>{
        console.log(BaseURL+type+EndURL);
        fetch(BaseURL+type+EndURL, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}
