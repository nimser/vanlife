create table host (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  hashed_password varchar(255) not null
);

create table van (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  price smallint unsigned not null,
  description text not null,
  imageUrl varchar(255) not null,
  type varchar(80) not null,
  host_id int unsigned not null,
  foreign key (host_id) references host(id)
);
