const weatherContainer = document.querySelector(".weather-container")
export async function callApi()
{
    
    try{
        const searchTerm = document.getElementById('search-term').value
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + searchTerm + '?key=244JMX32FS9MBU4F9RVWDZ3CP', {mode: 'cors'})

        if(!response.ok)
        {
            throw new Error("Could Not Fetch.")
        }

        return await response.json();
        

    }
    catch(error){
        console.log(error)
    }
}

export async function recieveAPI()
{
    const data = await callApi()
    console.log(data)
    displayCityAndTemp(data)
    displayInformationHours(data)
    displayOtherDays(data)
}

function displayCityAndTemp(data)
{
    const cityTempContainer = document.createElement("div")

    const cityName = document.createElement("div")
    cityName.innerHTML = data.resolvedAddress

    const temp = document.createElement("div")
    temp.innerHTML = String(Math.round(data.currentConditions.temp))

    const condition = document.createElement("div")
    condition.innerHTML = data.currentConditions.conditions

    const highAndLowTemp = document.createElement("div")
    highAndLowTemp.innerHTML = 'H:' + data.days[0].tempmax + ' ' + 'L:' + data.days[0].tempmin
    
    cityTempContainer.appendChild(cityName)
    cityTempContainer.appendChild(temp)
    cityTempContainer.appendChild(condition)
    cityTempContainer.appendChild(highAndLowTemp)

    weatherContainer.appendChild(cityTempContainer)

}
function displayInformationHours(data)
{
    const descriptionContainer = document.createElement("div")
    const description = document.createElement("div")
    description.innerHTML = data.description
    
    descriptionContainer.appendChild(description)

    for(let i = 0; i < data.days[0].hours.length; i++)
    {
        //console.log(data.days[0].hours[i])
        const hourContainer = document.createElement("div")
        const time = document.createElement("div")
        time.innerHTML = data.days[0].hours[i].datetime
        const weatherIcon = document.createElement("img")

        const temperature = document.createElement("div")
        temperature.innerHTML = String(Math.round(data.days[0].hours[i].temp))
        console.log(temperature)

        hourContainer.appendChild(time)
        hourContainer.appendChild(weatherIcon)
        hourContainer.appendChild(temperature)

        descriptionContainer.appendChild(hourContainer)
        

    }
    weatherContainer.appendChild(descriptionContainer)
}

function determineIcon(image, data)
{
    if(data.currentConditions.conditions == "Clear")
    {

    }
}

function displayOtherDays(data)
{
    const fullWeekContainer = document.createElement("div")
    const dayContainer = document.createElement("div")
    for(let i = 1; i < data.days.length; i++)
    {
        const date = document.createElement("div")
        date.innerHTML = data.days[i].datetime

        const weatherIcon = document.createElement("img")

        const temperature = document.createElement("div")
        temperature.innerHTML = data.days[i].temp

        dayContainer.appendChild(date)
        dayContainer.appendChild(weatherIcon)
        dayContainer.appendChild(temperature)

        fullWeekContainer.appendChild(dayContainer)
    }
    weatherContainer.appendChild(fullWeekContainer)
}
