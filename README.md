# ExpenseManager

Spring Boot application with Mongodb database and React Frontend.


`docker run --name mongo -v $(pwd)/mongoData/db:/data/db -d mongo`  
`docker run --name mongo -v $(pwd)/mongoData/db:/data/db -p 27017:27017 -d mongo`

`docker build -t expensemanager .`
