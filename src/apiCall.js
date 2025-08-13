import { styleDisplayCityAndTemp, styleDisplayInformationHours, styleDisplayOtherDays, styleDisplayOtherDaysSupport} from "./stylingJavascript"

const weatherContainer = document.querySelector(".weather-container")
export async function callApi()
{
    
    try{
        const searchTerm = document.getElementById('search-term').value
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + searchTerm + '?key=GXELVTWZ7A34QZA83HXJSSST4', {mode: 'cors'})

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
    resetInformation()
    displayCityAndTemp(data)
    displayInformationHours(data)
    displayOtherDays(data)
}

function displayCityAndTemp(data)
{
    
    const cityTempContainer = document.createElement("div")
    cityTempContainer.className = "city-temp-container"

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

    styleDisplayCityAndTemp(cityTempContainer)

    weatherContainer.appendChild(cityTempContainer)

}
function displayInformationHours(data)
{
    
    const descriptionContainer = document.createElement("div")
    const description = document.createElement("div")
    description.innerHTML = data.description
    
    descriptionContainer.appendChild(description)
    const secondaryContainer = document.createElement("div")

    for(let i = 0; i < data.days[0].hours.length; i++)
    {
        //console.log(data.days[0].hours[i])
        const hourContainer = document.createElement("div")
        const time = document.createElement("div")
        convertMilitaryTimeToStandard(data, i, time)
        const weatherIcon = document.createElement("img")

        const temperature = document.createElement("div")
        temperature.innerHTML = String(Math.round(data.days[0].hours[i].temp))
        console.log(temperature)

        hourContainer.appendChild(time)
        hourContainer.appendChild(weatherIcon)
        hourContainer.appendChild(temperature)

        hourContainer.style.width = "60px"
        hourContainer.style.borderStyle = "solid"

        secondaryContainer.appendChild(hourContainer)

        secondaryContainer.style.borderStyle = "solid"
        secondaryContainer.style.display = 'flex'
        secondaryContainer.style.gap = "5px"
        secondaryContainer.style.justifyContent = 'space-around'
        secondaryContainer.style.minHeight = '0'
        secondaryContainer.style.overflowX = 'scroll'

        descriptionContainer.appendChild(secondaryContainer)
        

    }
    styleDisplayInformationHours(descriptionContainer)
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
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const fullWeekContainer = document.createElement("div")
    for(let i = 1; i < data.days.length; i++)
    {
        const dayContainer = document.createElement("div")
        const date = document.createElement("div")
        date.innerHTML = data.days[i].datetime
        const dateConvert = new Date(date.innerHTML)
        const weekName = dateConvert.getDay();
        date.innerHTML = daysOfWeek[weekName]

        const weatherIcon = document.createElement("img")

        const temperature = document.createElement("div")
        temperature.innerHTML = data.days[i].temp

        dayContainer.appendChild(date)
        dayContainer.appendChild(weatherIcon)
        dayContainer.appendChild(temperature)

        styleDisplayOtherDaysSupport(dayContainer)
        fullWeekContainer.appendChild(dayContainer)
    }
    styleDisplayOtherDays(fullWeekContainer)
    weatherContainer.appendChild(fullWeekContainer)
}

function resetInformation()
{
    while(weatherContainer.firstChild)
    {
        weatherContainer.removeChild(weatherContainer.firstChild)
    }
}

function convertMilitaryTimeToStandard(data, i, time)
{
    let hour = data.days[0].hours[i].datetime.substr(0,2)

    if(hour < 12)
    {
        if(hour == "00")
        {
            let newTime = 12 + " " + "AM"
            time.innerHTML = newTime
            console.log(newTime)
        }
        else if(hour[0] == '0')
        {
            let newTime = hour.substr(1,1) + " " + "AM"
            time.innerHTML = newTime
            console.log(newTime)
            
        }
        else
        {
            let newTime = hour + " " + "AM"
            time.innerHTML = newTime
            console.log(newTime)
        }
        
    }
    else
    {
        if(hour == "12")
        {
            let newTime = hour + " " + "PM"
            time.innerHTML = newTime
            console.log(newTime)
        }
        else
        {
            let newTime = (parseInt(hour) - 12) + " " + "PM"
            time.innerHTML = newTime
            console.log(newTime)
        }
    }
}
