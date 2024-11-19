document.getElementById('startButton').addEventListener('click', () => {
    fetch('/start-rat') // This would make a request to your backend.
        .then(response => response.json())
        .then(data => console.log(data));
});

document.getElementById('stopButton').addEventListener('click', () => {
    fetch('/stop-rat') // Similar backend request.
        .then(response => response.json())
        .then(data => console.log(data));
});
