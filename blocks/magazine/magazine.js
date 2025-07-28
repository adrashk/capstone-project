export default async function decorate(block) {
  fetch('http://localhost:3000/query-index.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok  ${response.statusText}`);
      }
      return response.json();
    })
    .then((value) => {
      const cardData = value;
      const creteCard = document.createElement('div');
      creteCard.className = 'card-cls';
      cardData.data.forEach((item, index) => {
        if (index < 6) {
          const card = document.createElement('div');
          card.className = 'card';
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = 'Card Image';
          const title = document.createElement('h3');
          title.textContent = item.title;
          const description = document.createElement('div');
          description.className = 'card-description';
          description.textContent = item.description;
          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(description);
          card.addEventListener(('click'), () => {
            window.location.href = item.path;
          });
          creteCard.appendChild(card);
          block.appendChild(creteCard);
        }
      });
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
