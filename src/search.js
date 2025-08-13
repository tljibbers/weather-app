import { callApi, recieveAPI } from "./apiCall";
import { styleSearchBar } from "./stylingJavascript";

const weatherContainer = document.querySelector(".weather-container")
const searchButtonClass = document.querySelector(".search-button")

export function searchPlace()
{
    const createForm = document.createElement("form")
    const search = document.createElement("input")
    search.setAttribute('type', 'text');
    search.setAttribute('name', 'placeName')
    search.setAttribute('placeholder', 'Enter Country or City')
    search.id = 'search-term'
    console.log(search.id)

    styleSearchBar(search)
    createForm.appendChild(search)
    weatherContainer.appendChild(createForm)
    sendSearchTerm(createForm, search)
    

}

export function searchPlaceButton()
{
    const createSecondForm = document.createElement("form")
    const search = document.createElement("input")
    search.setAttribute('type', 'text');
    search.setAttribute('name', 'placeName')
    search.setAttribute('placeholder', 'Enter Country or City')
    search.id = 'search-term'

    createSecondForm.appendChild(search)
    weatherContainer.appendChild(createSecondForm)
    sendSearchTerm(createSecondForm, search)
    

}

function searchButtonFunctionality()
{
    resetInformation()
    const searchButton = document.createElement("button")
    searchButtonClass.appendChild(searchButton)

    searchButton.addEventListener("click", function() {
        searchPlaceButton()
    })
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
            searchButtonFunctionality()
        }
    })
}

function resetInformation()
{
    while(searchButtonClass.firstChild)
    {
        searchButtonClass.removeChild(searchButtonClass.firstChild)
    }
}