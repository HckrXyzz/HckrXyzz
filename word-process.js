  const wordListElement = document.getElementById('wordList');

        // Function to add a word to the word list as <li>
        const addWordToList = (word) => {
            const li = document.createElement('li');
            li.textContent = word;
            wordListElement.appendChild(li);
        };

        // Function to clean and process words
        const processWords = (text) => {
            // Remove symbols and split words
            const words = text
                .replace(/[!@#$%^&*()_+=<>?":{}|,./;'\\[\]`~]/g, ' ') // Replace symbols with space
                .split(/\s+/) // Split by spaces

                // Remove short words (<6 characters)
                .filter(word => word.length >= 6)

                // Split words longer than 14 characters
                .flatMap(word => {
                    if (word.length > 14) {
                        const chunks = [];
                        for (let i = 0; i < word.length; i += 14) {
                            chunks.push(word.substring(i, i + 14));
                        }
                        return chunks;
                    }
                    return word;
                });

            // Sort words alphabetically and ascending
            const sortedWords = [...new Set(words)].sort((a, b) => a.localeCompare(b));

            // Clear the existing word list
            wordListElement.innerHTML = '';

            // Add processed words to the list
            sortedWords.forEach(word => addWordToList(word));
        };

        // Process words from input textarea or file
        document.getElementById('processButton').addEventListener('click', () => {
            const textInput = document.getElementById('textInput').value;
            const fileInput = document.getElementById('fileInput').files[0];

            if (textInput) {
                processWords(textInput);
            } else if (fileInput) {
                const reader = new FileReader();
                reader.onload = (e) => processWords(e.target.result);
                reader.readAsText(fileInput);
            } else {
                alert('Please provide input from textarea or file.');
            }
        });

        // Fetch and process words from URLs
        document.getElementById('fetchButton').addEventListener('click', async () => {
            try {
                const urls = [
                    "https://gist.githubusercontent.com/HckrXyzz/495af967a6fffee4e6e5c9ada86f6f41/raw/35c874b0f9c012d0ff805c02a23445026a482966/page2.txt",
                    "https://gist.githubusercontent.com/HckrXyzz/495af967a6fffee4e6e5c9ada86f6f41/raw/35c874b0f9c012d0ff805c02a23445026a482966/users.txt"
                ];
                let combinedText = '';
                for (const url of urls) {
                    const response = await fetch(url);
                    if (response.ok) {
                        combinedText += await response.text() + '\n';
                    }
                }
                processWords(combinedText);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data from the URLs.');
            }
        });
        // Function to remove duplicate <li> elements from wordList
        const removeDuplicateLiElements = () => {
            const listItems = Array.from(wordListElement.querySelectorAll('li'));
            const uniqueTexts = new Set(listItems.map(li => li.textContent));

            // Clear the list
            wordListElement.innerHTML = '';

            // Add unique items back to the list
            uniqueTexts.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                wordListElement.appendChild(li);
            });
        };

        // Example usage: Call this function whenever needed
        removeDuplicateLiElements();
