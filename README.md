# jspr4123-Build2

server  >> storing certain book data
        >> user register 
        >> subscriber


This is a book record management API Server/ Backend for the library system or management of records or manual or books

Fine system:
user:05/06/2024 - 09/06/2024
09/06/2024 => 50*3=150/-


## Subscription Types
3 months (Basic)
6 months (Standard)
12 months (Premium)

If the subscription type is standard && if the subscription date is 05/06/2024
=> The subscription valid till 05/12/2024

within subscription date >> if we miss the renewal >> 50/- day
subscription date is also been missed >> and also missed the renewal >> 100/- + 50/- day


>> book1 
>> basic 
>> 05/06/2024 -> subscription date
>> 07/06/2024 => borrowed a book from library 
>> book1 renewal date is 21/06/2024
>>23/06/2024 => we need to pay a fine of 50


>> book2 
>> basic 
>> 05/06/2024 -> subscription date
>> 07/06/2024 => borrowed a book from library 
>> book1 renewal date is 21/06/2024
>>23/12/2024 => we need to pay a fine of 100+50


missed by renewal date >> 50/-
missed by subscriptionc date >> 100/-
missed by renewal && subscription date >> 150/-





# Routs and Endpoints 

## /user
POST: Create a new user
GET: Get all user info here

## /user/{id}
GET:Get a user by id
PUT:Update a user by their ID
DELETE:Delete a user by id

## /user/subscription-details/{id}
GET:Get user subscription details 
        >>Date of subscription 
        >>Valid till
        >>Is there any fine

## /books
GET:Get all the books
POST:Create/Add a new book

## /book/{id}
GET:Get a book by id
PUT:Update a book by id

## /book/issued 
GET:Get all issued book

## /book/issued/withfine
GET:Get all books with their fine




## npm init 
## npm i nodemon --save-dev
## npm i express 
## npm run dev



...each
     ## "name": "Jane",
     ## "surname": "Doe",
      "email": "user@email.com",
      "subscriptionType": "Premium",
      "subscriptionDate": "01/01/2022"


...data
  "data": {
    ## "name": "rudra",
    ## "surname": "jena"
  }

name: rudra
surname: jena
email: user@email.com
subscriptioType: "Premium"
