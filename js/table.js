document.getElementById('fetch-token-button').addEventListener('click', fetchAccessToken);

async function fetchAccessToken() {
    const membercode = document.getElementById('membercode').value;
    const password = document.getElementById('password').value;
    const option = '2'; // Can be changed as per your requirement
    const domain = 'https://www.github.io'; // Update as needed
    const platform = 'desktop'; // Platform can be changed according to your need

    try {
        const response = await fetch('https://feapi.bigape88.xyz/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://hckrxyzz.github.io',
                'Referer': 'https://hckrxyzz.github.io/HckrXyzz/login'
            },
            body: JSON.stringify({ membercode, password, option, domain, platform })
        });

        // Check if the response is OK
        if (response.ok) {
            const data = await response.json(); // Parse JSON response

            // Assuming the response contains 'access_token'
            if (data && data.access_token) {
                // Create a new <td> element
                const tokenCell = document.getElementById('token-cell');
                tokenCell.textContent = data.access_token; // Update the cell with the access token
            } else {
                console.error('Access token not found in response:', data);
            }
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
async function createTable() {
      const sheetId = '1phwx00uPnzEfogheEL8Rzm7LcpHvB2QjdbDTZ3Py6RA';
      const gid = '0'; // The sheet tab index, 0 is the first sheet
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&id=${sheetId}&gid=${gid}`;

      try {
        const response = await fetch(url);
        const csv = await response.text();
        const rows = csv.split('\n').map(row => row.split(','));

        let html = '<table border="1" cellpadding="5">';
        rows.forEach(row => {
          html += '<tr>';
          row.forEach(cell => {
            html += `<td>${cell}</td>`;
          });
          html += '</tr>';
        });
        html += '</table>';

        document.getElementById('table-container').innerHTML = html;

      } catch (error) {
        console.error('Error loading CSV:', error);
        document.getElementById('table-container').innerHTML = 'Failed to load data.';
      }
    }
