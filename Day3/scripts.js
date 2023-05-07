const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
      nav = document.getElementById(navbarId);
  
    if (headerToggle && navbarId) {
      toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggleBtn.classList.toggle('fa-times');
      });
    }
  };
  showMenu('header-toggle', 'navbar');
  
  const linkcolor = document.querySelectorAll('.nav_link');
  
  function colorLink() {
    linkcolor.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');
  }
  linkcolor.forEach((l) => l.addEventListener('click', colorLink));
  
  function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video_card';

    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    thumbnail.className = 'video_thumbnail';
  
    const title = document.createElement('h3');
    title.textContent = video.title;
    title.className = 'video_title';
  
    const description = document.createElement('p');
    description.textContent = video.description;
    description.className = 'video_description';
  
    // Add click event listener to title
    videoCard.addEventListener('click', () => {
      if (title.textContent.toLowerCase().includes('unpaid event')) {
        window.location.href = 'video.html';
      } 
       else {
        window.location.href = 'video_paid.html';
      }
    });
  
    videoCard.appendChild(thumbnail);
    videoCard.appendChild(title);
    videoCard.appendChild(description);
  
    return videoCard;
  }
  
  async function fetchVideoCards() {
    const response = await fetch('http://127.0.0.1/fetch_video_cards.php', {
      method: 'GET',
    });
  
    if (response.ok) {
      const videoCards = await response.json();
  
      const videoGrid = document.getElementById('video-cards-container');
      videoCards.forEach((video) => {
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
      });
    } else {
      console.error('Error fetching video cards:', response.status, response.statusText);
    }
  }
  

  function generateVideoData() {
    const videoData = [
      {
        title: 'Unpaid Event Video',
        description: 'This is an unpaid event.',
        thumbnail: 'https://via.placeholder.com/300x200/2.jpg'
      },
      {
        title: 'Paid Event Video',
        description: 'This is a paid event.',
        thumbnail: 'https://via.placeholder.com/300x200/2.jpg'
      },
      {
        title: 'Paid Event Video',
        description: 'This is a paid event.',
        thumbnail: 'https://via.placeholder.com/300x200/2.jpg'
      },
      {
        title: 'Paid Event Video',
        description: 'This is a paid event.',
        thumbnail: 'https://via.placeholder.com/300x200/2.jpg'
      },
      {
        title: 'Unpaid Event Video',
        description: 'This is an unpaid event.',
        thumbnail: 'https://via.placeholder.com/300x200/2.jpg'
      }
      // Add more video objects as needed
    ];
    
    return videoData;
  }

  async function loadVideoCards() {
    const videoCards = generateVideoData();
  
    const videoGrid = document.getElementById('video-cards-container');
    videoCards.forEach((video) => {
      const videoCard = createVideoCard(video);
      videoGrid.appendChild(videoCard);
    });
  }

  loadVideoCards();
  // fetchVideoCards();
