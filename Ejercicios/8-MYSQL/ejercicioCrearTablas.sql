DROP SCHEMA IF EXISTS disco_of_the_year;
CREATE SCHEMA IF NOT EXISTS disco_of_the_year;
USE disco_of_the_year;

CREATE TABLE IF NOT EXISTS Gnere (
idGenre INTEGER PRIMARY KEY AUTO_INCREMENT,
Genre VARCHAR(255)
);

INSERT INTO disco_of_the_year.Gnere(idGenre, Genre) VALUES
(NULL, "Pop"),
(NULL, "Rock"),
(NULL, "Flamenco"),
(NULL, "Indie"),
(NULL, "Baladas"),
(NULL, "Bachata"),
(NULL, "Salsa"),
(NULL, "Techno"),
(NULL, "Chumba"),
(NULL, "Hardcore");

INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('diez');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('nueve');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('ocho');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('siete');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('seis');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('cinco');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('cuatro');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('tres');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('dos');
INSERT INTO `disco_of_the_year`.`gnere` (`Genre`) VALUES ('uno');

SELECT * FROM disco_of_the_year.gnere;

CREATE TABLE IF NOT EXISTS Album (
idAlbum INTEGER PRIMARY KEY AUTO_INCREMENT,
albumName VARCHAR(255),
dateReleased DATETIME
);

INSERT INTO disco_of_the_year.Album(idAlbum, albumName, dateReleased) VALUES
(NULL, "machu", "2022-02-02"),
(NULL, "pichu", "2021-02-02"),
(NULL, "jota", "2020-02-02"),
(NULL, "abracadabra", "2019-02-02"),
(NULL, "baladas del desierto", "2012-02-02"),
(NULL, "no sabre de ti", "2015-02-02"),
(NULL, "nunca mas", "2003-02-02"),
(NULL, "al infierno", "1922-02-02"),
(NULL, "jota de aragon", "1979-02-02"),
(NULL, "baila", "1946-02-02");

INSERT INTO `disco_of_the_year`.`Album` (`albumName`, `dateReleased`) VALUES ('lala', '1950-03-30');
INSERT INTO `disco_of_the_year`.`Album` (`albumName`, `dateReleased`) VALUES ('lolo', '1960-03-02');
INSERT INTO `disco_of_the_year`.`Album` (`albumName`, `dateReleased`) VALUES ('lulu', '1955-03-05');
INSERT INTO `disco_of_the_year`.`Album` (`albumName`, `dateReleased`) VALUES ('aja', '1970-06-03');
INSERT INTO `disco_of_the_year`.`Album` (`albumName`, `dateReleased`) VALUES ('ajuju', '1978-06-10');

SELECT * FROM disco_of_the_year.Album;

CREATE TABLE IF NOT EXISTS Artist (
idArtist INTEGER PRIMARY KEY AUTO_INCREMENT,
artistName VARCHAR(255)
);

INSERT INTO disco_of_the_year.Artist(idArtist, artistName) VALUES
(NULL, "juan"),
(NULL, "alberto"),
(NULL, "jose"),
(NULL, "maria"),
(NULL, "alba"),
(NULL, "luci"),
(NULL, "jose maria"),
(NULL, "miguel"),
(NULL, "manu"),
(NULL, "alicia");

INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('mariajuan');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('marijose');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('maripepe');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('maripepa');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('mariajosefa');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('azuzena');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('azuzena sin azucar');
INSERT INTO `disco_of_the_year`.`Artist` (`artistName`) VALUES ('pepita de los carmenes');

SELECT * FROM disco_of_the_year.Artist;