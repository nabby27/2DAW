
async function init() {
    console.log('calling');
    result = await getData();
    console.log(result.name);
}

async function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'Ivan'});
        }, 2000);
    });
}
