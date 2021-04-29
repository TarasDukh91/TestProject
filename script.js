const API_KEY = 'sl4CoGFAlMRCHvuIIb2bFezCdXZiMUDkzIkvVO4p'
let roverQuery = ''
let cameraQuery = ''


const curiosity = document.querySelector('#curiosity').addEventListener('click', function(e){
    roverQuery = e.target.value 
})
const opportunity = document.querySelector('#opportunity').addEventListener('click', function(e){
    roverQuery = e.target.value 
});
const spirit = document.querySelector('#spirit').addEventListener('click', function(e){
    roverQuery = e.target.value 
});
const frontCamera = document.querySelector('#front').addEventListener('click', function(e) {
    cameraQuery = e.target.value
})
const rearCamera = document.querySelector('#rear').addEventListener('click', function(e) {
    cameraQuery = e.target.value
})
const navCamera = document.querySelector('#nav').addEventListener('click', function(e) {
    cameraQuery = e.target.value
})
const image = document.querySelector('.image')
const submitButton = document.querySelector('.submit-button');
const paginationElement = document.querySelector('.pagination-button')
const imagesContainer = document.querySelector('.images-container')
const numberInput = document.querySelector('.number-input');

let start = 0;
let end = 10

 paginationElement.addEventListener('click', () => {
    start+=10
    end+=10
    getPics()
})

function renderPicsArray(data) {
    const link = data.map(photo => photo.img_src)
    const slicedLink = link.slice(start, end)
    slicedLink.map(link => {
        const img = document.createElement('img')
        img.src = link
        img.classList = 'image'
        imagesContainer.appendChild(img)
    })
    
}
 
const getPics = async function () {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverQuery}/photos?sol=${numberInput.value}&camera=${cameraQuery}&api_key=${API_KEY}`)
    const data = await res.json()
    const newData = data.photos.map(photo => {
        return photo
    })
    renderPicsArray(newData)
}


submitButton.addEventListener('click', function(e) {
    e.preventDefault()
    getPics()
    renderPicsArray;
})

