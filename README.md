# react-express-mysql-nginx (demonstration)

This is a simple application with react for front-end, expressjs for back-end and mysql for database. 
Mainly to demonstrate the react practices and some code styles with javascript and css. Expressjs simply provided apis and mysql stores data. 

Used react and react-dom for react component, react-router-dom for routing and axios for api request and that's all. 
No ui-framwork, no tailwind, only css. Use react local state management.

Contents:

1.  [How to run](#how-to-run)
1.  [How to use](#how-to-use)
    1.  [General workflow](#general-workflow)
    1.  [Error handling](#error-handling)
1.  [What's next](#whats-next)

## How to run

To run in production mode on local machine, all you need is havinf docker installed on your machine. Then run the following code:

```markdown
docker-compose up -d --build
```
That's all! Now there should be 3 containers runing on your docker, one is front-end one is back-end and another is the database.

If you want to enter the development mode, run:

```markdown
docker compose -f .\docker-compose.dev.yml up --build
```

And to shut down the app, just run:

```markdown
docker-compose down -v
```

## How to use

### General workflow

The feature is mainly about information storage, includin searching, creating and updating.

Go to ```http://localhost:3000/searchPerson```(development) or ```http://localhost:8080/searchPerson```(production), following is the creating workflow:

<img width="200" alt="a609aafe1bcb4cf1b8a9a3ddbb8b1ba" src="https://user-images.githubusercontent.com/46805148/175810890-70f861cc-71c3-481b-8264-5b5f5e625b60.png"><img width="200" alt="476a647b92b1ffb116b07fe97eaaf9e" src="https://user-images.githubusercontent.com/46805148/175810911-a1f2a0de-88b3-4840-8234-925b11d53cbf.png"><img width="200" alt="598c03dbe6d64b1c4ec94ac311f9344" src="https://user-images.githubusercontent.com/46805148/175811142-b6089228-c1ba-4a1d-9328-2f7fb7d01f86.png"><img width="200" alt="ddd61e846e4eafdf36ec754e7592080" src="https://user-images.githubusercontent.com/46805148/175811147-1c699961-bda8-4958-8b4a-0c61ce49c6bd.png"><img width="200" alt="a56548d8a8eae7b2a427c182d588a51" src="https://user-images.githubusercontent.com/46805148/175811178-30a00ac8-9149-40c0-907f-f3723510ca41.png">

Following is the updating workflow:

<img width="200" alt="7f3a1f2b84a9d1579ab9ef2e699fe51" src="https://user-images.githubusercontent.com/46805148/175811839-ef5c7c7a-7cb5-49a9-a3b8-48971507fcbb.png"><img width="200" alt="b5e0358c79792e952752218b6488b44" src="https://user-images.githubusercontent.com/46805148/175811601-98e45e18-72d5-4f1d-b5e5-f8e05245fb05.png"><img width="200" alt="88e05e3f920f4b3c7c47d89b376fcd7" src="https://user-images.githubusercontent.com/46805148/175811729-a83d0d88-173f-40ba-a0c0-c4b1fbd34a69.png"><img width="200" alt="96b43e11a9d63e509eacf5553a57ca1" src="https://user-images.githubusercontent.com/46805148/175811730-8bb267ac-a7be-4ba0-87b2-163449ad61aa.png"><img width="200" alt="732451a69a58c3bb08427054571fe46" src="https://user-images.githubusercontent.com/46805148/175811753-6f1d1802-0a0a-4178-ad3b-af49b007e18a.png">

### Error handling

Form ui error: <img width="200" alt="9032fee0c1bb217981797d92c493bac" src="https://user-images.githubusercontent.com/46805148/175812255-58473e6b-4a5c-46f7-9662-e260a578b7a5.png">
system error: <img width="200" alt="f4889dee5f870e1a79f888d9e50a0bd" src="https://user-images.githubusercontent.com/46805148/175812303-d3393430-d030-4cd0-ad02-307e457292fd.png">

## What's next

1. ~~TypeScript~~ (Done)

2. Unit test (jest)

3. Deploy to google cloug server with Jenkins
