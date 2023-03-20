const accesskey = "deqt1kHwmMrtgma8-3tBeomO9AWfRlIlWUj9u2D4WGo"

const formEl = document.getElementById("form")
const searchInputEl = document.getElementById("search-input")
const searchResultsEl = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");

let inputData="";
let page=1;

async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}
    &client_id=${accesskey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(page == 1){
        searchResultsEl.innerHTML ="";
    }
    const result = data.results;
    results.map((result)=>{
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src= result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a")
        imageLink.href = results.link.innerHTML
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsEl.appendChild(imageWrapper);

    });
    page++;

    console.log(page);
  
    if (page>1){
        showMoreButton.style.display=block;
    }
    console.log(results);
}

formEl.addEventListener("submit" , (event)=>{
    event.preventDefault();
    page = 1;
    searchImages()  
});

showMoreButtonEl.addEventListener("click", () =>{
    searchImages();
});
