npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,streetAddress1:string,streetAddress2:string,city:string,state:string,zip:string,hashedPassword:string,phoneNumber:string;

npx sequelize-cli model:generate --name Picture --attributes url:string;

npx sequelize-cli model:generate --name UserProfilePicture --attributes profilePictureId:integer,userId:integer

npx sequelize-cli model:generate --name BikeSize --attributes name:string

npx sequelize-cli model:generate --name BikeType --attributes size:string

npx sequelize-cli model:generate --name UserInterestType --attributes userId:integer,typeId:integer;

npx sequelize-cli model:generate --name UserInterestSize --attributes userId:integer,sizeId:integer;

npx sequelize-cli model:generate --name Listing --attributes brand:string,model:string,pricePerDay:integer,typeId:integer,sizeId:integer,pricePerDay:integer,pricePerWeek:integer,isAvailable:boolean,ownerId:integer,latitude:float,longitude:float;

npx sequelize-cli model:generate --name ListingBikePicture --attributes listingId:integer,bikePictureId:integer;

npx sequelize-cli model:generate --name Booking --attributes listingId:integer,userId:integer,startDay:date,endDay:date,status:string,duration:integer;

npx sequelize-cli model:generate --name BikeRating --attributes bookingId:integer,userId:integer,review:text,stars:integer;

npx sequelize-cli seed:generate --name users
npx sequelize-cli seed:generate --name pictures
npx sequelize-cli seed:generate --name user-profile-pictures 
npx sequelize-cli seed:generate --name bike-sizes
npx sequelize-cli seed:generate --name bike-types
npx sequelize-cli seed:generate --name user-interest-types
npx sequelize-cli seed:generate --name user-interest-sizes
npx sequelize-cli seed:generate --name listings
npx sequelize-cli seed:generate --name listing-bike-pictures
npx sequelize-cli seed:generate --name bookings
npx sequelize-cli seed:generate --name bike-ratings
