CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS receivers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    category TEXT,
    likes TEXT,
    deadline TEXT
);

-- CREATE TABLE IF NOT EXISTS categories (
--     id SERIAL PRIMARY KEY,
--     category TEXT
-- );

-- CREATE TABLE IF NOT EXISTS likes (
--     id SERIAL PRIMARY KEY,
--     likes TEXT
-- );

-- CREATE TABLE IF NOT EXISTS deadline (
--     id SERIAL PRIMARY KEY,
--     deadline DATE
-- );