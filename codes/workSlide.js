//Get elements from DOM

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');
const text = document.querySelectorAll('images .text-schwork')

//add a click event to all buttons
for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click',filterImg);
         
}

//set active button on click
function setActiveBtn(e) {
    //Remove active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    //Add active class for the clicked button
    e.target.classList.add('btn-clicked');

}

//Filter images
function filterImg(e) {
    //Run the active button function
    setActiveBtn(e);
     //Loop through all images
     imgs.forEach(img => {
        //Expand all images
        img.classList.remove('img-shrink');
        img.classList.remove('text-schwork-shrink');
        img.classList.add('img-expand');
        img.classList.add('text-schwork-expand');

        //Get data from data attributes
        //Get image type data
        const imgType = parseInt(img.dataset.img);
        //Get button type data
        const btnType = parseInt(e.target.dataset.btn);
        //If the image type and the type of click button are not the same
        if(imgType !== btnType){
            //Hide the image
            img.classList.remove('img-expand');
            img.classList.remove('text-schwork-shrink');
            img.classList.add('img-shrink');
            img.classList.add('text-schwork-expand');
        }
     });
}

//Set click event for "All" button

btns[0].addEventListener('click',(e) => {
    //Run the active button function
    setActiveBtn(e);
    //Loop through all images
    imgs.forEach(img => {
        //Expand all images
        img.classList.remove('img-shrink');
        img.classList.remove('text-schwork-shrink');
        img.classList.add('img-expand');
        img.classList.add('text-schwork-expand');
    });
});