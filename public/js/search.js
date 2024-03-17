let locations = [];

async function search() {
    console.log('hello');
    const searchInput = document.getElementById('search-input').value;

    try {
        // Send an AJAX request to fetch search results based on the input
        const response = await fetch(`/api/locations?search=${searchInput}`);
        console.log('response', response);
        const data = await response.json();
        console.log('data', data);
        locations=data;

        // Clear previous search results
        document.getElementById('search-results-list').innerHTML = '';

        // Populate search results
        data.forEach(location => {
            const listItem = document.createElement('li');
            listItem.textContent = location.name + ', ' + location.address;
            document.getElementById('search-results-list').appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// Attach search function to the search button
document.getElementById('search-button').addEventListener('click', search);