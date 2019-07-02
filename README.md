# ExpenseManager

Spring Boot application with Mongodb database and React Frontend.

Mongo database container start:  
`docker run --name mongo -v $(pwd)/mongoData/db:/data/db -d mongo`  
`docker run --name mongo -v $(pwd)/mongoData/db:/data/db -p 27017:27017 -d mongo`

Building Docker Image for ExpenseManager APIs  
`docker build -t expensemanager .`

Creating ExpenseManager APIs Container  
`docker run -it --name expensemanager -p 8080:8080 -rm <ImageName>`
