CREATE TABLE koalas(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (70) NOT NULL,
	"gender" VARCHAR (10),
	"age" INTEGER,
  	"ready_to_transfer" VARCHAR (10) NOT NULL,
  	"notes" VARCHAR(150)
);

SELECT

INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES ('Ted', 'M', 7, 'Y', 'Ted likes to cuddle, but only at night, otherwise, he likes to roam the one tree branch that he is capable of reaching.');
INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES ('Francis', 'F', 2, 'N', 'Francis is a picky eater who only eats sage green shades of bamboo...too yellow and she spits it out, too green and will not touch it.');
INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES ('Karen', 'F', 11, 'N', '...well she is a Karen, enough said!');
INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES ('Ozwald', 'M', 4, 'Y', 'He is real into jazz, call him Ozzy for short.');

SELECT * FROM "koalas";