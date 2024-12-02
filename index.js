let key = "8c57a2f7"

let api = "http://www.omdbapi.com/?i=tt3896198"


let main_div = document.getElementById("main")

let input = document.getElementById("input")



async function getDetails() {

    const data = await fetch(`${api}&apiKey=${key}&s=${input.value}`)

    const value = await data.json()

    console.log(value);

    display(value.Search)
}


function debouncing() {
    setTimeout(getDetails, 1000)
}



function display(data) {

    main_div.innerHTML = ""

    data.map((el) => {

        let div = document.createElement("div")
        div.setAttribute("class", "childDiv")

        const h1 = document.createElement("h1")
        h1.innerText = el.Title

        const img = document.createElement("img")
        img.src = el.Poster
        img.setAttribute("class", "imageVideo")


        let url = document.createElement("a")
        url.href = `https://www.imdb.com/title/${el.imdbID}/?ref_=chtmvm_t_5`
        url.target = "_blank" // Open the IMDb url in a new tab
        url.innerText = "Watch"


        div.append(img, h1, url)
        main_div.append(div)
    })


}




// getDetails()