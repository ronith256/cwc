# Code with Consequences

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
