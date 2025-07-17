export default async function callApi()
{
    
    try{
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pomona?key=244JMX32FS9MBU4F9RVWDZ3CP', {mode: 'cors'})

        if(!response.ok)
        {
            throw new Error("Could Not Fetch.")
        }

        const data = await response.json();
        console.log(data)

    }
    catch(error){
        console.log(error)
    }
}
