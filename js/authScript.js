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
                  if (data.access_token) {
                     localStorage.setItem('authToken', data.access_token);
                     localStorage.setItem('username', membercode);
                     window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/home';
                  } else {
                     console.error('Token not received');
                     alert('Login failed: Token not received');
                  }
               } else {
                  console.error('HTTP error:', response.status, response.statusText);
                  alert('Login failed: ' + response.statusText);
               }
            } catch (error) {
               console.error('Error:', error);
               alert('Login failed');
            }
         }

         function checkToken() {
            const authToken = localStorage.getItem('authToken');

            if (!authToken) {
               window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
               return;
            }

            const headers = new Headers({
               'Authorization': 'Bearer ' + authToken,
               'Content-Type': 'application/json'
            });

            fetch('https://feapi.bigape88.xyz/api/token/validate', {
               method: 'GET',
               headers: headers
            })
            .then(response => {
               if (!response.ok) {
                  window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
               }
            })
            .catch(error => {
               console.error('Error:', error);
               window.location.href = 'https://hckrxyzz.github.io/HckrXyzz/login';
            });
         }

         setInterval(checkToken, 600000); // Check every 10 minutes
checkToken();
