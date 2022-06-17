let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let div = document.querySelector('div');

btn1 = addEventListener('click', Getir)
btn2 = addEventListener('click', GetirPhoto)
// btn1 = addEventListener('click', GetirComments)



function Getir() {

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        response.json().then(data => {
            let posts = '';
            data.forEach(element => {
                posts += `${element.userId}, ${element.id}, ${element.title}, ${element.body} </br>`
            });
            div.innerHTML = posts;
        }).catch(err => {
            alert(err)
        })
    })


}

// console.log("Getir()");

function GetirPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
        response.json().then(data => {
            let photos = '';
            data.forEach(element => {
                photos += `${element.albumId},${element.id}, ${element.title}, <img src='${element.url}/> <br/>'`
            });
            div.innerHTML = photos;
        }).catch(err => {
            alert(err)
        })
    })
}

