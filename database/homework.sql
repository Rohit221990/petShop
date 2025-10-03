-- homework.sql

-- Create table to store common pet info
CREATE TABLE Pets (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL,    -- 'Cat' or 'Dog'
    name VARCHAR(100),            -- nullable for unnamed pets
    age INT NOT NULL,
    favorite_food VARCHAR(100),
    speak_count INT DEFAULT 0
);

-- Create table to store pet name history (one-to-many relationship)
CREATE TABLE PetNames (
    id SERIAL PRIMARY KEY,
    pet_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (pet_id) REFERENCES Pets(id) ON DELETE CASCADE
);

-- Sample inserts:

-- Insert a cat with name and favorite food
INSERT INTO Pets (type, name, age, favorite_food, speak_count)
VALUES ('Cat', 'Whiskers', 7, 'Fish', 3);

-- Insert corresponding name history for that cat
INSERT INTO PetNames (pet_id, name) VALUES (1, 'Whiskers');
INSERT INTO PetNames (pet_id, name) VALUES (1, 'Felix');

-- Insert a nameless dog
INSERT INTO Pets (type, name, age, favorite_food, speak_count)
VALUES ('Dog', NULL, 8, 'Bone', 10);

-- Insert names history if known
INSERT INTO PetNames (pet_id, name) VALUES (2, 'Rex');
INSERT INTO PetNames (pet_id, name) VALUES (2, 'Buddy');

-- Insert named dog
INSERT INTO Pets (type, name, age, favorite_food, speak_count)
VALUES ('Dog', 'Fido', 5, NULL, 2);

INSERT INTO PetNames (pet_id, name) VALUES (3, 'Fido');
