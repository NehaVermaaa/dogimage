const dogBtn = document.querySelector('.dogBtn');
        const gallery = document.querySelector('.gallery');
        const errorMessage = document.querySelector('.error-message');

        dogBtn.addEventListener('click', () => {
            errorMessage.style.display = 'none'; // Hide the error message on new requests
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    return response.json();
                })
                .then(data => {
                    const dogImage = document.createElement('img');
                    dogImage.src = data.message;
                    dogImage.alt = 'A random dog';
                    dogImage.classList.add('dogImage');

                    // Append the new image to the gallery
                    gallery.appendChild(dogImage);
                })
                .catch(error => {
                    console.error('Error fetching the API:', error);
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = 'Failed to fetch the dog image. Please try again later.';
                });
        });