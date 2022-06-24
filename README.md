# react-express-mysql-nginx (demonstration)

This is a simple application with react for front-end, expressjs for back-end and mysql for database. 
Mainly to demonstrate the react practices and some code styles with javascript and css. Expressjs simply provided apis and mysql stores data. 

Used react and react-dom for react component, react-router-dom for routing and axios for api request and that's all. 
No ui-framwork, no tailwind, only css. Use reeact local state management (redux probably is a bit overkill for this project).

Contents:

1.  [How to run](#how-to-run)
1.  [How to use](#how-to-use)
    1.  [General workflow](#general-workflow)
    1.  [Error handling](#error-handling)
1.  [What's next](#whats-next)

## How to run

To run in development mode on local machine, all you need is havinf docker installed on your machine. Then run the following code:

```markdown
docker-compose up -d
```
That's all! Now there should be 3 containers runing on your docker, one is front-end one is back-end and another is the database.
And to shut down the app, just run:

```markdown
docker-compose down -v
```

## How to use

### General workflow

### Error handling

## What's next

1. TypeScript
2. Unit test (jest)
3. Deploy to google cloug server with Jenkins
