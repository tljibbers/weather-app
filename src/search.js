import { callApi, recieveAPI } from "./apiCall";

const weatherContainer = document.querySelector(".weather-container")

export function searchPlace()
{
    const createForm = document.createElement("form")
    const search = document.createElement("input")
    search.setAttribute('type', 'text');
    search.setAttribute('name', 'placeName')
    search.setAttribute('placeholder', 'Enter Country or City')
    search.id = 'search-term'
    console.log(search.id)

    createForm.appendChild(search)
    weatherContainer.appendChild(createForm)
    sendSearchTerm(createForm, search)
    

}

function sendSearchTerm(form, search)
{
    form.addEventListener('submit', function(event){
        event.preventDefault();
    })
    search.addEventListener('keydown', event => {
        console.log(event)
        if(event.key == 'Enter')
        {
            callApi()
            recieveAPI()

        }
    })
}