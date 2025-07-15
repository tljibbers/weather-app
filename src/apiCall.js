export default function callApi()
{
    console.log("test")
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=244JMX32FS9MBU4F9RVWDZ3CP', {mode: 'cors'})
    .then(function(response) {
        console.log(response.json())
    })
    .catch(function(err) {
        console.log(err)
    })
}
