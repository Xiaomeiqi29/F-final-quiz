export function fetchTrainees() {
    const url = 'http://localhost:8080/trainees';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addTrainee(name) {
    const url = 'http://localhost:8080/trainees';
    return fetch(url,{
        method:'POST',
        body:name
    })
        .then((response) => response.json())
        .catch((error) => error)
}

export function fetchTrainers() {
    const url = 'http://localhost:8080/trainers';
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => {
            console.log(err)
        })
}

export function addTrainer(name) {
    const url = 'http://localhost:8080/trainers';
    return fetch(url,{
        method:'POST',
        body:name
    })
        .then((response) => response.json())
        .catch((error) => error)
}