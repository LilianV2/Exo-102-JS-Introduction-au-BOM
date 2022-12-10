let button = document.createElement('button')
button.innerHTML = 'Twitter'
document.body.appendChild(button)

let delButton = document.createElement('button')
delButton.innerHTML = "delete window"
document.body.appendChild(delButton)

button.addEventListener('click', () => {
    let features = "menubar=no, scrollbars=no, width=450, height=300"
    let newTwitter = window.open("https://www.Twitter.com/", '', features)
    newTwitter.moveTo(600, 600);

    delButton.addEventListener("click", () => {
        newTwitter.close()
    })
})



