DROP TABLE IF EXISTS admins CASCADE;

CREATE TABLE
  admins (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    permission VARCHAR(255) NOT NULL
  );

-- insert personal_information
INSERT INTO
  admins (email, password, permission)
VALUES
  ('admin@gmail.com', 'Rafat_saqqa','MANAGE_SITE') RETURNING *;

--  //////////////////////////////////////////////////////////


DROP TABLE IF EXISTS personal_information CASCADE;

CREATE TABLE
  personal_information (
    id SERIAL PRIMARY KEY NOT NULL,
    position VARCHAR(255) NOT NULL ,
    bio VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
  );

-- insert personal_information
INSERT INTO
  personal_information (position, bio, image)
VALUES
  ('Full-stack', 'Hello im Rafat Saqqa passion full stack web developer based in jordan','upload photo') RETURNING *;

--  //////////////////////////////////////////////////////////

DROP TABLE IF EXISTS contact CASCADE;

CREATE TABLE
  contact (
    id SERIAL PRIMARY KEY NOT NULL,
    phone VARCHAR(255) NOT NULL ,
    mail VARCHAR(255) NOT NULL
  );

-- insert personal_information
INSERT INTO
  contact (phone, mail)
VALUES
  ('00962777396184', 'raafat.saqqa@gmail.com') RETURNING *;

  --  //////////////////////////////////////////////////////////

DROP TABLE IF EXISTS about CASCADE;

CREATE TABLE
  about (
    id SERIAL PRIMARY KEY NOT NULL,
    about_me VARCHAR(255) NOT NULL
  );

-- insert about_me
INSERT INTO
  about (about_me)
VALUES
  ('Specializing in web development, high motivation, and fast learner. 
Looking for an opportunity to gain experience for improving myself to 
deliver excellent Web pages.') RETURNING *;
  --  //////////////////////////////////////////////////////////

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE
  projects (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    githubRepo VARCHAR(255) NOT NULL,
    liveView VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW ()
  );

-- insert about_me
INSERT INTO
  projects (id,title,description,image,githubRepo,liveView)
VALUES
  (1,'Academia','Welcome to Academia,
  in the site you will see list of courses
 depending in which category you click. 
','uplead in front','github','live view'),(2,'MetaBook','It is a social networking platform 
similar to the Facebook platform, 
in which allows people to share their moments first.
','uplead in front','github','live view') RETURNING *;