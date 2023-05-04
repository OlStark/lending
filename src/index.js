let button = document.querySelector('.button');
let pointsList = document.querySelector('.points_list').children;

let index = 1;
let page = '01';
let lastPage = '06';


document.querySelector('.first_number').innerHTML = page;
document.querySelector('.second_number').innerHTML = lastPage;


function sum () {
    let newNumber =  Number(page) + index - 1;
    let newString = '0' + String(newNumber);
    document.querySelector('.first_number').innerHTML = newString;
}

const nextElem = () => {
    if (index !== 0) {
        pointsList[index - 1].classList.remove('active')
    } if (index >= pointsList.length) index = 0;
    pointsList[index].classList.add('active');
    index += 1;

    window.scrollBy({
        top: 1080,
        behavior: "smooth",
    })
    sum();
}



button.addEventListener('click', () => {
    nextElem()
})