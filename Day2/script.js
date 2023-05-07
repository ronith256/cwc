$(document).ready(function() {
    // Get the video id from the POST request
    const urlParams = new URLSearchParams(window.location.search);
    // const videoId = urlParams.get('id');
    const videoId = 1;
    const videoPlayer = document.getElementById('video-source');

    // Send an AJAX request to the PHP script to retrieve the video details
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:80/get-video-details.php',
      data: { video_id: videoId },
      dataType: 'json',
      success: function(data) {
        // Insert the video details into the HTML elements
        $('#video-title').text(data.title);
        $('#video-description').text(data.description);
        $('#uploader-name').text(data.uploader);
        $('#view-count').text(data.view_count);
        $('#like-count').text(data.like_count);
        $('#dislike-count').text(data.dislike_count);
        videoPlayer.src = data.video_url;
        console.log(videoPlayer)
      },
      error: function() {
        // Show an error message if the video details could not be retrieved
        $('#video-title').text('Video not found');
      }
    });
  
    // Send an AJAX request to the PHP script to retrieve the video suggestions
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:80/video_suggestions.php',
      data: { video_id: videoId },
      dataType: 'json',
      success: function(data) {
        // Insert the video suggestions into the HTML container
        for (let i = 0; i < data.length; i++) {
          const video = data[i];
          const html = `
            <div class="video_items vide_sidebar flex">
              <a href="watch.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}" />
              </a>
              <div class="details">
                <p>${video.title}</p>
                <span>${video.uploader} <i class="fa fa-cricle-check"> </i> </span>
                <div></div>
                <span>${video.view_count} views</span>
              </div>
            </div>
          </div>
        </div>
          `;
          $('#suggestions-container').append(html);
        }
      },
      error: function() {
        // Hide the video suggestions container if there are no suggestions
        $('#suggestions-container').hide();
      }
    });
  });
  