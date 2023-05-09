
const insertElement = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label, placeholder)
                      break
    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('input')
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('value', label)
    el.addEventListener('click', () => {
        el.remove()
    })
    document.querySelector("#elements").appendChild(el) 
}

const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('div')
    el.setAttribute('class', 'form-check mt-1')
    let input = document.createElement('input')
    input.setAttribute('type', 'radio')
    input.setAttribute('class', 'form-check-input')
    input.setAttribute('name', 'radio-group')
    let labelEl = document.createElement('label')
    labelEl.setAttribute('class', 'form-check-label')
    labelEl.textContent = label
    el.appendChild(input) 
    el.appendChild(labelEl) 
    el.addEventListener('click', () => {
        el.remove()
    })
    document.querySelector("#elements").appendChild(el) 
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('button')
    el.setAttribute('type', 'button')
    el.setAttribute('class', 'btn btn-primary mt-1')
el.textContent = label
el.addEventListener('click', () => {
el.remove()
})
document.querySelector("#elements").appendChild(el)
}

const deleteElement = () => {
let el = document.querySelector("#elements").lastChild
if(el) {
el.remove()
}
}
