const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(res => res.json())
    .then(img => renderImg(img.message))
    

function renderImg(images){
    //console.log(images)
    images.forEach(image => {
        const imgList = document.querySelector("#dog-image-container")
        const img = document.createElement('img');
        img.src = image;
        imgList.appendChild(img)     
    });
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
    .then(res => res.json())
    .then(nameUl => renderName(nameUl)) //.message

function renderName(names){
    Object.keys(names.message).forEach(name => {
    //console.log(names)
    const namesUl = document.querySelector("#dog-breeds")
    const li  = document.createElement("li")
    li.textContent = name;
    li.className = "dogName"
    namesUl.appendChild(li);
    //console.log(li)
    li.addEventListener("click", function(){
    li.style.color = generateRandomColor();
    });
    })
}

function generateRandomColor(){
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

const select = document.querySelector("#breed-dropdown")
function addLetter(){
    for(let i = 101; i < 123; i++){
        // console.log(i)
        
        const letter = String.fromCharCode(i); 
        
        const option = document.createElement("option")
        option.value = letter
        option.textContent = letter
        select.append(option);
        //console.log(select)
    }
    
}
addLetter();

select.addEventListener("change", (event) => {
    let selectLetter = event.target.value
    let dogList = document.querySelectorAll("li.dogName")
  
    dogList.forEach((li) => {
      if (li.innerText.startsWith(selectLetter)) {
        li.style.display = ""
      } else {
        li.style.display = "none"
      }
    })
  
  })




console.log('%c HI', 'color: firebrick')
