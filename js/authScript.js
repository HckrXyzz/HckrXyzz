window.onload = async function () {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login'; // Redirect to login page if no token found
        return;
    }

    const url = "https://feapi.bigape88.xyz/api/token/validate";

    const headers = {
        "Origin": "https://hckrxyzz.github.io",
        "Authorization": 'Bearer ' + authToken
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers
        });

        if (response.status === 200) {
            const result = await response.json();
            const username = result.data.membercode;
            window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/';
        } else {
            alert('Login failed');
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
    }
};

async function authLogin() {
    const loginUrl = "https://feapi.bigape88.xyz:443/api/token";
    const membercode = document.getElementById('membercode').value;
    const password = document.getElementById('password').value;

    const body = {
        "membercode": membercode,
        "password": password,
        "domain": "https://hckrxyzz.github.io",
        "platform": "desktop",
        "option": "2",
        "fp": "0e609d52598730e61d217ae90ea9be2d"
    };

    const headers = {
        "Content-Type": "application/json",
        "Origin": "https://hckrxyzz.github.io"
    };

    try {
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        if (response.status === 200) {
            const result = await response.json();
            const authToken = result.access_token;

            localStorage.setItem('authToken', authToken);
            console.log('statusCode:', response.status);
            console.log('body:', result);
        } else {
            alert('Login failed');
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
