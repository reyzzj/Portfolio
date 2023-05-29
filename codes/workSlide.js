//Get elements from DOM

const btns = document.querySelectorAll('.buttons button');
const cards = document.querySelectorAll('.images .card');
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
     cards.forEach(div => {
        //Expand all images
        div.classList.remove('card-shrink');
        div.classList.remove('text-schwork-shrink');
        div.classList.add('card-expand');
        div.classList.add('text-schwork-expand');

        //Get data from data attributes
        //Get div type data
        const imgType = parseInt(div.dataset.div);
        //Get button type data
        const btnType = parseInt(e.target.dataset.btn);
        //If the image type and the type of click button are not the same
        if(imgType !== btnType){
            //Hide the image
            div.classList.remove('card-expand');
            div.classList.remove('text-schwork-shrink');
            div.classList.add('card-shrink');
            div.classList.add('text-schwork-expand');
        }
     });
}

//Set click event for "All" button

btns[0].addEventListener('click',(e) => {
    //Run the active button function
    setActiveBtn(e);
    //Loop through all images
    cards.forEach(div => {
        //Expand all images
        div.classList.remove('card-shrink');
        div.classList.remove('text-schwork-shrink');
        div.classList.add('card-expand');
        div.classList.add('text-schwork-expand');
    });
});