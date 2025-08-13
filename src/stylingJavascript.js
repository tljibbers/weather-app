export function styleDisplayCityAndTemp(cityTempContainer)
{
    cityTempContainer.style.border = "1px"
    cityTempContainer.style.borderRadius = "5px"
    cityTempContainer.style.borderStyle = "solid"
    cityTempContainer.style.textAlign = 'center'
}

export function styleDisplayInformationHours(descriptionContainer)
{
    descriptionContainer.style.border = "1px"
    descriptionContainer.style.borderRadius = "5px"
    descriptionContainer.style.borderStyle = "solid"

}

export function styleDisplayOtherDays(fullWeekContainer)
{
    fullWeekContainer.style.border = "1px"
    fullWeekContainer.style.borderRadius = "5px"
    fullWeekContainer.style.borderStyle = "solid"
    fullWeekContainer.style.display = 'flex'
    fullWeekContainer.style.gap = '1px'
    fullWeekContainer.style.justifyContent = 'space-evenly'
}

export function styleDisplayOtherDaysSupport(dayContainer)
{
    dayContainer.style.border = "1px"
    dayContainer.style.width = "60px"
    dayContainer.style.borderStyle = "solid"
}

export function styleSearchBar(searchBar)
{
    searchBar.style.width = "800px"
    searchBar.style.height = "50px"
    searchBar.style.borderRadius = "25px"
    searchBar.style.boxShadow = "0px 0px 10px 3px rgba(214, 212, 212, 0.5)"
    searchBar.style.border = 'none'
    searchBar.style.position = "absolute"
    searchBar.style.top = "40%"
    searchBar.style.left = "30%"
    searchBar.style.translate = "translate(-50%, -50%)"


}