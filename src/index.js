import obj from './event_list'

let jj = document.querySelector(".jj")

let filter = document.querySelector(".filter")

const makeEvent = event => {
    let newEvent = document.createElement("DIV")
    newEvent.classList.add("event")
    let LinkTitleText = document.createElement("DIV")
    let VenueCity = event.VenueCity
    let soldout = document.createElement("P")
    if(event.IsSoldOut){
        soldout.append("SOLD OUT")
    }else{
        soldout.append("TICKETS STILL AVALIABLE")
    }
    let option = document.createElement("OPTION")
    option.append(VenueCity)
    filter.append(option)
    LinkTitleText.innerHTML = event.LinkTitleText
    newEvent.append(LinkTitleText)
    newEvent.append(soldout)
    jj.append(newEvent)
}

obj.Items.forEach(event => {
    makeEvent(event)
})


filter.addEventListener("change", (e) => {
    jj.innerHTML = ""
    obj.Items.forEach(event => {
        if(event.VenueCity === e.currentTarget.value){
            makeEvent(event)
        }
        if(e.currentTarget.value === "Filter"){
            makeEvent(event)
        }
    })
})

// jj.innerHTML = obj.Items[0].VenueCity