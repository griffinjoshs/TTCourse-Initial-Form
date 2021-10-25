submit.addEventListener("click", async (event) => {
    event.preventDefault();
    await doSubmit()
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

// fetch('http://localhost:9000/api')
//     .then(res => res.json())
//     .then(data => console.log(data) || displayData(data))
//     .catch(error => console.log("ERROR"))

//     const displayData = (data) => {
//         document.getElementById('displayData').innerHTML = JSON.stringify(data)
//     }

