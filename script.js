// READ the giphy API docs: https://developers.giphy.com/
// declare our variables and select our elements 
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'RQzY7YY3RAX9YCR5E0tF1afkmZtotmUA'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector('input')
var results = document.querySelector('.results')


// define our functions
function getGifs(path,term){
    $.ajax({
        url:`${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        type:"GET",
        dataType:"json",
        success:function(data){
            console.log(data)
            for(var i=0; i<data.data.length;i++){
                results.innerHTML +=`
                <img class="image" src="${data.data[i].images.preview_gif.url}">
                `
            }
        },
        error: function(error){
            console.log("there was an error")

        }
    })
}




// call functions and/or add eventlisteners
searchForm.addEventListener('submit',function(event){
    event.preventDefault()
    results.innerHTML = ''
    getGifs("search",searchInput.value)

})