create table PLACES
(
    ID          INTEGER not null
        primary key,
    PLACE_CODE  VARCHAR(255),
    PLACE_VALUE VARCHAR(255)
);

create table TRIP
(
    ID          INTEGER not null
        primary key,
    DATE_FROM   TIMESTAMP,
    DATETO      TIMESTAMP,
    PLACE_FROM  VARCHAR(255),
    PLACE_TO    VARCHAR(255),
    TRIP_NUMBER VARCHAR(255)
);

Insert into places (id, PLACE_CODE,PLACE_VALUE) values ( 1,'R_SAMARA','Самара, Россия' );
Insert into places (id, PLACE_CODE,PLACE_VALUE) values ( 2,'R_MOSCOW','Москва, Россия' );
Insert into places (id, PLACE_CODE,PLACE_VALUE) values ( 3,'R_Orenburg','Оренбург, Россия' );

Insert into TRIP(id, DATE_FROM,DATETO,PLACE_FROM,PLACE_TO,TRIP_NUMBER) values ( 1,'2020-06-01 23:50:20.000000','2020-06-02 23:50:23.000000', 1,2,'000001' );
Insert into TRIP(id, DATE_FROM,DATETO,PLACE_FROM,PLACE_TO,TRIP_NUMBER) values ( 2,'2020-06-01 23:50:20.000000','2020-06-02 23:50:23.000000', 1,2,'000002');




