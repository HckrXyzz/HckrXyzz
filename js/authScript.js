async function authLogin() {
    const membercode = document.getElementById('membercode').value;
    const password = document.getElementById('password').value;
    const domain = "https://hckrxyzz.github.io/";
    const platform = 'desktop';
    const option = '2';

    try {
        const response = await fetch('https://feapi.bigape88.xyz/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': domain,
                'Referer': 'https://hckrxyzz.github.io/HckrXyzz/login'
            },
            body: JSON.stringify({ membercode, password, domain, platform, option })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('username', membercode);
                window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/';
            } else {
                alert('Login failed');
            }
        } else {
            alert('Login failed');
            console.error('HTTP error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed');
    }
}
