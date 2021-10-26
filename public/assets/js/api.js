submit.addEventListener("click", async (event) => {
    event.preventDefault();
    await doSubmit()
    sendForm()
    window.location.reload()
})

const doSubmit = () => {
    console.log('submit', userAnswers)
    return fetch('http://localhost:9000/api/enroll', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userAnswers)
    });  
}

const sendForm = () => {
    return fetch('http://localhost:9000/api/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify(userAnswers)
        body: JSON.stringify(userAnswers)

    });
}