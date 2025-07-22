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
    test(data)
}

function test(data)
{
    for(let i = 0; i < data.days[0].hours.length; i++)
    {
        console.log(data.days[0].hours[i])
    }
}
