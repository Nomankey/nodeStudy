## Twitter API

### **Schema**
```
tweet = {
    id: String,
    name: String,
    userName: String,
    text: String,
    createAt: Date,
    avatar: String(optional),
}

user = {
    name: String,
    userName: String,
    avatar: String(optional),
}
```
### **GET**
#### GET /tweets
```
//Response
{
    statusCode: 200,
    [tweets, tweets...]
}
//Error Code
{
    statusCode: 404,
    errorMessage: 'No tweets are found'
}
```
#### GET /tweets/:id
#### GET /tweets?userName=:userName

```
//Response
{
    statusCode: 200,
    [tweets, tweets...]
}
//Error Code
{
    statusCode: 404,
    errorMessage: 'No tweets are found'
}
```

### **CREATE**

#### POST /tweets
```
//Request
{
    name,
    userName,
    text,
    avatar, [optional]
}

//Response
{
    statusCode: 201,
    tweet,
}

//Error Code
{
    statusCode: 401,
    errorMessage: 'You must login first to tweet'
}
```

### **UPDATE**
#### PUT /tweets/:id
```
// Request
{
    text,
}

// Response
{
    statusCode: 200,
    tweet,
}

//Error Code
{
    statusCode: 401,
    errorMessage: 'You must login first to tweet'
}

{
    statusCode: 403,
    
{

    statusCode: 404,
    errorMessage: 'No tweets are found'
}
```

### **DELETE**
#### DELETE /tweets/:id
```
//response
{
    statusCode: 204,
}

//Error Code
{
    statusCode: 401,
    errorMessage: 'You must login first to tweet'
}

{
    statusCode: 403,
    errorMessage: 'You are not authorized'
}

{
    statusCode: 404,
    errorMessage: 'No tweets are found'
}
```