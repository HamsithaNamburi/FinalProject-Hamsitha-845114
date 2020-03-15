create database EmartDB
use EmartDB
create table Buyers(
id int primary key,
username varchar(20) not null,
password varchar(20) not null,
emailid varchar(30),
mobilenumber int  ,
createddatetime datetime
);
create table Seller(
id int primary key,
username varchar(20) not null,
password varchar(20) not null,
companyname varchar(50) not null,
GSTIN varchar(30) ,
briefaboutcompany varchar(100),
postal_address  varchar(60),
website varchar(60),
emailid varchar(30),
contactnumber int
);

create table Category(
Category_id int primary key ,
Category_name varchar(30),
brief_details varchar(60),
);
create table SubCategory(
subcategory_id int primary key,
subcategory_name varchar(50) not null,
category_id int foreign key references Category(Category_id),
brief_details varchar(60),
GSTper decimal
);
create table Item(
id varchar(15) primary key,
category_id int foreign key references Category(Category_id),
subcategory_id int foreign key references SubCategory(subcategory_id),
seller_id int foreign Key references Seller(id),
price int not null,
item_name varchar(60),
item_description varchar(90),
stock_number int ,
remarks varchar(50),
);
create table Purchase(
id varchar(20) primary key,
Buyer_id int foreign key references Buyers(id),
Seller_id int foreign key references Seller(id),
Transaction_id varchar(30),
Item_id int foreign key references Items(id),
Number_of_items int not null,
Date_time datetime,
remarks varchar(50)

);
create table Discounts(
D_Id int primary key,
Discount_code varchar(20),
percentage int ,
start_date date,
end_date date,
D_description varchar(80)

);
Alter table items add seller_id int
Alter table items add  foreign key(seller_id) references Seller(id);
Alter Table items Drop Column seller_id;
sp_rename  "Seller.id", "sid";
Alter table Purchase add T_status varchar(20);
sp_rename "Purchase.Transaction_id","T_name"
Alter table items add Image varchar(500);
Alter table addtocart add itemid int
Alter table addtocart add foreign key(itemid) references Items(id);

create table AddToCart(
id varchar(15) primary key,
category_id int foreign key references Category(Category_id),
subcategory_id int foreign key references SubCategory(subcategory_id),
seller_id int foreign Key references Seller(sid),
price int not null,
item_name varchar(60),
item_description varchar(90),
stock_number int ,
remarks varchar(50),
buyer_id int foreign Key references Buyers(id),
);

create table AddToCart(
id varchar(15) primary key,
category_id int foreign key references Category(Category_id),
subcategory_id int foreign key references SubCategory(subcategory_id),
seller_id int foreign Key references Seller(sid),
price int not null,
item_name varchar(60),
item_description varchar(90),
stock_number int ,
remarks varchar(50),
buyer_id int foreign Key references Buyers(id),
);
Alter table AddToCart add Image varchar(500);
Delete Items where Id=5
Delete Purchase where Item_id=5
Delete Purchase where id='P0'
Delete Purchase where id='P64'


