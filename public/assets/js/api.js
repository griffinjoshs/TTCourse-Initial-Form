// const submit = document.getElementById('submit')

submit.addEventListener("click", async (event) => {
    event.preventDefault();
    await doSubmit()
})

const doSubmit = () => {
    console.log('submit', userAnswers)
    return fetch('http://localhost:9000/api/enroll', {
        method: 'POST',
        // body: JSON.parse(submit.getAttribute('userAnswers'))
        body: userAnswers
    });
}

// fetch('http://localhost:9000/api')
//     .then(res => res.json())
//     .then(data => console.log(data) || displayData(data))
//     .catch(error => console.log("ERROR"))

//     const displayData = (data) => {
//         document.getElementById('displayData').innerHTML = JSON.stringify(data)
//     }

