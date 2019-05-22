DROP TYPE IF EXISTS twitter.user;

CREATE TYPE twitter.user (
  first_name text,
  last_name text,
  email text,
  dob timestamp
);