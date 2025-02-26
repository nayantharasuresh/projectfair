# React + Vite

*MongoDB*
-------
    The mongoDb is an open source document-based database. It's used for high-volume data storage

SQL
----
    -Relational/SQL RDBMS.
    -store data in table with rows and columns.
    -uses fixed schema.
    -optimized for complex join and transactions.
    -support rich set of data type.
    -ACID (Atomocity Consistency Isolation Durability ).
    -uses traditional business app.

MongoDB
--------
    -Document oriented/ NoSQL DB.
    -store data as collection of JSON documents.
    -uses dynamic schema.
    -optimized for scalability and performance.
    -limit set of data types.
    -CAP(Consistency Durability Partition Tolerence).
    -used in big data and real time application.


*------- Mongosh
--------------
    show databases: database display 
    use database_name: select particular database
    show collection: show the collection of particular database
    db.uses.find(): used to read the datas from collecxtion of database.
    findone: used to find single element details
    coundDocument: used find the cound from collection of documents
    -------*

CRUD operations
----------------
    -to read all products from a collection: find()
    -to get single document from a collection: ({key:value})
    -to insert a single document to a collection: inserOne({key:value})
    -to insert a single document to a collection: inserMany([{key:value},{key:value}..])
    -to display total count of document in a collection: coundDocument()
    -to limit count of document read from collection:limit(number)
    -to sort data: sort(condition)-- 1-ascending order
                                    -1-descending order
    -to skip data while reading documents: skip(number)
    -$gt/$gte/$lt/$lte : query expression used to read the documents  eg:db.users.find({age:{$gte:25}}) : used to find age >=25
    -$in/$nin : used to check the document include or not. eg:db.users.find({username:{$in:["abhi","aji"]}})
    -  eg: db.users.find({age:{$gt:23,$lt:30}})
    -$expr : used to compare different fields in same document.  eg: db.users.find({$expr:{$gt:["$debit","$balance"]}}) to compare the value of debit is > value of balance.
    -to update document : updateOne/updateMany
                    - $set: to assign values
                    - $
    -               
    -to delete document use deleteOne/deleteMany
    -$exists : used to delete a particular condition based exist data from the collection
    -aggregation: used to join multiple collection.

                collection_name.aggregate(syntax)
                    {
                        $lookup:{
                            from: <.collectionto join> ex:projects
                            localfield:<field from the input
                            document> ex:email,
                            foreignfield: <field from the document of thr "from" collection> ex:userid,
                            as: ex:projects
                        }
                    }

NODE JS - SERVER/BACKND
-----------------------
    -js run time environment for + js library

    Features
    ----------
        -extreamly Features
        -asynchronous
        -single threaded with event lookup
        -highly scalablr
        -open source
    
    Node js global objects
    -----------------------
        - it can be accessed nay where from your node app without exporting/importing
                ex: console.log(),setTimeOut()
    Node module system
    -------------------
        -a file is considerd as module in node, to access data from one file it has expot from there, and before using it in another file it should be import there: 
            to import file: require('module name/path')
            to export file: module.exports/exports

    built in modules in node
    ------------------------
        -file system module(fs): handling file related event.
        -HTTP: used to create webserver .
        -https: used to create webserver. 
        -crypto: providing tools like hashing, encription etc.
        -events: works with eventEmitter.
        -process: used to provide info about currently running process in node app.(hold environment variable)
            -environmental variable used to hold configuration/confidential information regarding the project. to access ev through out the app    use 'process.env.variable_name'
            -node js package: used to resolve common problem
            - install package via npm
            - it adds package.json,package-lock.json and node modules in your application


            - Back-end concepts
            --------------------
                -client-server architecture
                -REST application
                -CRUD OPERATION(Create(POST), Read(GET), Update(PUT), Delete(DELETE))
                -CORS(Cross Origin Resource Sharing) protocol must be enable in the server

EXPRESS - Node js framework
------------------------------
        1. used in client server architecture as web server
        2. steps to create server using express
              - create a folder for back-end
              - create package.json file using the command 'npm init -y'
              - update package.json "script" value as  "start" : "node index.js" instead of test
              - install packages for creating express server

                    - express: npm i express
                    - cors: npm i cors
                    - dotenv: npm i dotenv

            - create .env file
            - create .gitignore file
            - create index.js file to define express server
            - import dotenv, express, cors.
            - create server using express
            - use cors in express server
            - use json parser in express server
            - create PORT for server app
            - run the server at the prot 

        3. create routes in express server
            - create a folder
                    - create ajs file inside the folder
                    - import express library
                    - create an object of router class of express:  router object is capable of defining route for the app
                    - export router from the file
                    - import in index.js file 
                    - use router in pfserver

        4. create a controller folder to define logic to solve client request


 MONGOOSE - Object Data Model(ODM) foe Node.js
 -------------------------------------------------

    - install mongoose using : npm i mongoose
    - 


jsonwebtoken -jwt
-------------------
    - library used foe authentication in client-server request.
    - used to secuerlt transfer information over the web
    - generate token if login success
            - token creation using jwt: use sign(payload, password)
                -payload: it is the data we wnat to store inside token
                - password: can be any data that has be define in .enc file
            
MIDDLEWARE-node js
----------------------
    - used to controll request-response cycle in server.before resolving a request server can perform any task(authorization, data format changing etc.) using middleware
    - middleweare are function with 3 arguments they are request, result, next
        -request: will give you client request
        -result: object will give you response from server
        -next: method used to controll request

        - Middleware can be of 2 types
            - appliication specific middleware: middleware will active for all client request
            - router specific middleware: middleware will active for selected client request

verify token using jsonwebtoken
==================================
    -using verify(token,password)method, if token verify return response else error

MULTER- MIDDLE WARE FOR HANDLING multipart/form data in node js
-------------------------------------------------------------------
    - install multer npm i multer
    - multer add body and file key to the request object
    - multer can used todefine storage space for uploaded file
    - to handle multipart/form data request using multer
        -- create js file
        -- import multer
        -- create a 'upload folder inside server folder for storing upload file
        -- define multer storage object in js file


Data sharing components in react
---------------------------------
    1. state lifting: lifting state to its parent, such that it can share state b/w it's child using props
    2. redux: to avoid props drilling while sharing the data across different components, avoid props drilling
    3. context API: use context share data b/w components, avoid props drilling

CONTEXT API- data sharing technique in react
---------------------------------------------
    - providing a centralized way to manage state across components
    - share specific info:(like state or function) with multiple components without props drilling
    - steps
        1. creating a context: creating context using createContext() hook
        2. provide the context: use provider of context, so that it helps to provide data to component
        3. consuming the context: to access/use shared a data using context API, use useContext() hook



