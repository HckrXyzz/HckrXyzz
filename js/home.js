window.onload = function() {
    const authToken = localStorage.getItem('authToken');
    
    if (!authToken) {
        window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login'; // Redirect to login page if no token found
        return;
    }

    const headers = new Headers({
        'Authorization': 'Bearer ' + authToken,
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Ch-Ua': '"Not:A-Brand";v="24", "Chromium";v="134"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'Sec-Ch-Ua-Mobile': '?0',
        'Origin': 'https://hckrxyzz.github.io',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://hckrxyzz.github.io/HckrXyzz/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Priority': 'u=1, i'
    });

    fetch('https://feapi.bigape88.xyz/api/token/validate', {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (response.ok) {
            // Token is valid, proceed to load home page
            console.log('Token is valid');
        } else {
            // Token is invalid, redirect to login page
            window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
    });
};
