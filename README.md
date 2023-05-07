# Code with Consequences

## Day 3
### As many parts of the website is dynamic, a working SQL server is required to preview properly. For the streaming page, refer to Day 2 design.
- Animation was added most of the components.
- The videos, and video recommendations are dynamic now. 
- Live video can be streamed using a http url. (Use OBS or VLC to generate a http stream)
- Videos can be added dynamically to a mySQL server with Title, Thumbnail, Video URL, Likes, Dislikes etc
- Login Page added and is connected to a mySQL server.

SQL Queries to be executed: 

CREATE DATABASE myvideos;

USE myvideos;

CREATE TABLE videos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  uploader VARCHAR(255) NOT NULL,
  view_count INT(11) NOT NULL DEFAULT 0,
  like_count INT(11) NOT NULL DEFAULT 0,
  dislike_count INT(11) NOT NULL DEFAULT 0,
  thumbnail VARCHAR(255) NOT NULL,
  video_url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO videos (title, description, uploader, thumbnail, video_url)
VALUES ('My Video Title j', 'This is a description of my video', 'John Doe', 'thumbnail.jpg', 'http://127.0.0.1:80/videos/1.mp4');

CREATE DATABASE usersdb;

USE usersdb;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO users (id, email, password) VALUES
(1, 'user1@example.com', 'password1'),
(2, 'user2@example.com', 'password2'),
(3, 'user3@example.com', 'password3');


## Day 2
- Task was to create a platform for hosting virutal live events. 

### Info
- Currently the video info is generated using js.
- It can also fetch video info from a mysql db. 
- SQL Queries:

CREATE TABLE video_cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail VARCHAR(255)
);

DELETE from video_cards;

INSERT INTO video_cards (title, description, thumbnail) VALUES
('Paid Event', 'This is a paid event.', 'https://via.placeholder.com/300x200/1.jpg'),
('Unpaid Event', 'This is a description for unpaid event.', 'https://via.placeholder.com/300x200/2.jpg'),
('Sample Video 3', 'This is a description for Sample Video 3.', 'https://via.placeholder.com/300x200/3.jpg'),
('Sample Video 4', 'This is a description for Sample Video 4.', 'https://via.placeholder.com/300x200/4.jpg'),
('Sample Video 5', 'This is a description for Sample Video 5.', 'https://via.placeholder.com/300x200/5.jpg');
