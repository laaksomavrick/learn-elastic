DROP TABLE IF EXISTS twitter.tweets;

CREATE TABLE twitter.tweets (
  id uuid PRIMARY KEY,
  content text,
  user twitter.user,
  likes int,
  liked_by list<uuid>,
  deleted boolean,
  created_at timestamp,
);
