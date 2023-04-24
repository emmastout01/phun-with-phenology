
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- EMMA TODO: I think I need to store weather - high, low + photo - here too
CREATE TABLE "note" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "date" DATE,
    "time" VARCHAR (40),
    "location" VARCHAR (1000),
    "content" TEXT
    );
    
CREATE TABLE "bird" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (500),
    "photo" VARCHAR (2000)
    );
    
CREATE TABLE "bird_note" (
    "id" SERIAL PRIMARY KEY,
    "bird_id" INTEGER REFERENCES "bird",
    "note_id" INTEGER REFERENCES "note", 
    "content" TEXT
    );

INSERT INTO "bird" ("name", "photo") 
VALUES 
('Song sparrow', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Song-sparrow-edited-350x350.jpg'), 
('American robin', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/American-robin-scaled-350x350.jpg'), 
('Blue jay', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Blue-Jay-2-edited-350x350.jpg'),
('Red-winged blackbird', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Red-winged-blackbirds-scaled-350x350.jpg'),
('Red-bellied woodpecker', 'https://wildbirdstore.com/wp-content/uploads/2012/11/red-bellied-woodpecker_web.jpg'),
('Downy woodpecker', 'https://www.birdadvisors.com/wp-content/uploads/2020/12/Downy-woodpecker-jack-bulmer-2-350x350.jpg'),
('Northern flicker', 'https://www.birdadvisors.com/wp-content/uploads/2021/02/northern-flicker-male-yellow-shafted-350x350.jpg'),
('Hairy woodpecker', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Hairy-woodpecker-2-edited-1-350x350.jpg'),
('House sparrow', 'https://www.birdadvisors.com/wp-content/uploads/2022/02/House-sparrow-edited-350x350.jpg'),
('American crow', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/American-Crow-edited-350x350.jpg'),
('Mourning dove', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Mourning-dove-2-1-edited-1-350x350.jpg'),
('Gray catbird', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Gray-catbird-768x512.jpg'),
('Common grackle', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Common-Grackle-edited-350x350.jpg'),
('European starling', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/European-common-starling-edited-350x350.jpg'),
('Cedar waxwing', 'https://wildbirdstore.com/wp-content/uploads/2015/03/cedarwaxing_web.png'),
('Brown-headed cowbird', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/Brown-headed-cowbird-male-and-female-edited-1-350x350.jpg'),
('Northern cardinal', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Northern-cardinal-scaled-350x349.jpg'),
('House wren', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/House-Wren-2-edited-350x350.jpg'),
('White-breasted nuthatch', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/White-breasted-nuthatch-edited-350x350.jpg'),
('Red-breasted nuthatch', 'https://www.birdadvisors.com/wp-content/uploads/2022/05/red-breasted-nuthatch-p125k9zemb2v3k1165k455q5msw8afspd6yacsj2m8-350x350.jpg'),
('Common yellowthroat', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/common-yellowthroat-edited-350x350.jpg'),
('Black-capped chickadee', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Black-capped-chickadee-scaled-350x350.jpg'),
('Dark-eyed junco', 'https://www.birdadvisors.com/wp-content/uploads/2021/02/Dark-eyed-Junco-scaled-350x350.jpg'),
('Baltimore oriole', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/baltimore-oriole-350x350.jpg'),
('American goldfinch', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/american-goldfinch-scaled-350x350.jpg'),
('Yellow warbler', 'https://www.birdadvisors.com/wp-content/uploads/2022/01/yellow-warbler-edited-350x350.jpg'),
('Yellow-rumped warbler', 'https://www.birdadvisors.com/wp-content/uploads/2022/04/yellow-rumped-Warbler-edited-350x350.jpg'),
('Magnolia warbler', 'https://www.birdadvisors.com/wp-content/uploads/2021/06/Magnolia-warbler-350x350.jpg'),
('Tennessee warbler', 'https://www.birdadvisors.com/wp-content/uploads/2021/08/Tennessee-Warbler-2-350x350.jpg'),
('Nashville warbler', 'https://www.birdadvisors.com/wp-content/uploads/2021/06/nashville-warbler-350x350.jpg'),
('Chipping sparrow', 'https://www.birdadvisors.com/wp-content/uploads/2022/02/chipping-sparrow-edited-350x350.jpg'),
('White-throated sparrow', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/White-throated-sparrow-2-scaled-350x350.jpg'),
('Canada goose', 'https://www.birdadvisors.com/wp-content/uploads/2022/06/Canada-Goose-350x350.jpg'),
('Wood duck', 'https://www.birdadvisors.com/wp-content/uploads/2022/10/Wood-Duck-female-edited-2-345x345.webp'),
('Blue-winged teal', 'https://www.birdadvisors.com/wp-content/uploads/2022/02/Blue-winged-teal-345x345.jpg'),
('Great blue heron', 'https://www.birdadvisors.com/wp-content/uploads/2022/09/Great-blue-heron-edited-350x350.jpg'),
('Great egret', 'https://www.birdadvisors.com/wp-content/uploads/2022/09/Great-Egret-350x350.jpg'),
('Great horned owl', 'https://www.birdadvisors.com/wp-content/uploads/2022/09/Great-horned-owl-scaled-edited-350x346.jpg'),
('Pileated woodpecker', 'https://www.birdadvisors.com/wp-content/uploads/2020/12/pileated-woodpecker-veronika-andrews-350x350.jpg'),
('House finch', 'https://www.birdadvisors.com/wp-content/uploads/2022/02/House-Finch-pair-edited-350x350.jpg'),
('Mallard duck', 'https://www.birdadvisors.com/wp-content/uploads/2022/02/Mallard-ducks-345x345.jpg'),
('Cooper’s hawk', 'https://www.birdadvisors.com/wp-content/uploads/2020/12/Depositphotos_coopers-hawk-scaled-350x350.jpg'),
('Red-tailed hawk', 'https://www.birdadvisors.com/wp-content/uploads/2020/12/Depositphotos_red-tailed-hawk-1-scaled-350x350.jpg'),
('Bald eagle', 'https://www.birdadvisors.com/wp-content/uploads/2021/06/Bald-Eagle-flying-350x350.jpg'),
('Eastern bluebird', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Eastern-Bluebirds-1-scaled-350x350.jpg'),
('Indigo bunting', 'https://www.birdadvisors.com/wp-content/uploads/2022/03/Indigo-Bunting-edited-350x349.jpg'),
('Broad-winged hawk', 'https://www.birdadvisors.com/wp-content/uploads/2020/12/Depositphotos_broad-winged-hawk-350x350.jpg'),
('Trumpeter swan', 'https://www.birdadvisors.com/wp-content/uploads/2022/06/Trumpeter-Swan-350x350.jpg'),
('Sandhill crane', 'https://www.birdadvisors.com/wp-content/uploads/2022/09/Sandhill-Crane-flying-2-edited-350x350.jpg'),
('Turkey vulture', 'https://www.birdadvisors.com/wp-content/uploads/2022/06/Turkey-Vulture-edited-350x350.jpg'),
('Brown creeper', 'https://wildbirdstore.com/wp-content/uploads/2012/11/Brown-Creeper-205x300.jpg'),
('Eastern meadowlark', 'https://www.birdadvisors.com/wp-content/uploads/2021/06/Eastern-meadowlark-350x350.jpg'),
('Ruby-throated hummingbird', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Ruby-throated-hummingbird-2-scaled-350x350.jpg'),
('Palm warbler', 'https://www.birdadvisors.com/wp-content/uploads/2021/01/Palm-warbler-350x350.jpg'),
('American redstart', 'https://www.birdadvisors.com/wp-content/uploads/2022/03/American-redstart-edited-1-350x350.jpg'),
('Scarlet tanager', 'https://www.birdadvisors.com/wp-content/uploads/2022/03/scarlet-tanager-edited-350x349.jpg');