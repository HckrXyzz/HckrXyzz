document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://feapi.bigape88.xyz/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Ch-Ua': '"Not:A-Brand";v="24", "Chromium";v="134"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
            'Sec-Ch-Ua-Mobile': '?0',
            'Origin': 'https://hckrxyzz.github.io',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://hckrxyzz.github.io/HckrXyzz/login',
            'Accept-Encoding': 'gzip, deflate, br',
            'Priority': 'u=1, i'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/';
        } else {
            alert('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed');
    });
});
