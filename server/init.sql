CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

INSERT INTO todo (description) VALUES('This is a test for heroku');