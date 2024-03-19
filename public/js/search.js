document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-bar');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const searchInput = document.getElementById('search-input').value;

        try {
            const response = await fetch(`/api/search?address=${searchInput}`);
            // const data = await response.json();
            // console.log(data)
        } catch (error) {
         console.error('Error fetching search results:', error);
       }
    })});

    //         // Process the response data and update the UI
    //         displaySearchResults(data.results);
    //     } catch (error) {
    //         console.error('Error fetching search results:', error);
    //     }
    // });

    // Function to display search results in the UI
//     function displaySearchResults(results) {

//         console.log(results)
//         const searchResultsList = document.getElementById('search-results-list');
//         searchResultsList.innerHTML = '';

//         results.forEach(place => {
//             const listItem = document.createElement('ul');
//             listItem.textContent = place.name + ', ' + place.vicinity;
//             searchResultsList.appendChild(listItem);
//         });
//     }
// });
