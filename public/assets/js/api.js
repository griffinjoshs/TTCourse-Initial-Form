submit.addEventListener("click", async (event) => {
    event.preventDefault();
    await doSubmit()
    sendForm()
    window.location.reload()
})

const doSubmit = () => {
    console.log('submit', userAnswers)
    return fetch('/api/enroll', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userAnswers)
    });  
}

const sendForm = () => {
    return fetch('/api/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify(userAnswers)
        body: JSON.stringify(userAnswers)

    });
}