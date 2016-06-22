


## REST API

Create user:
```
POST /users
{
    userName: {userName},
    email: {email},
    password: {password}
}

200 OK
{
  userId: {userId}
}
```

Get user:
```
GET /users/{userId}

200 OK
{
    userName: {userName},
    email: {email}
}

```

Create redirection:
```
POST /redirections
{
    userId: {userId},
    entry: {domain},
    destination: {domain}
}

200 OK
{
    redirectionId: {redirectionId}
}
```

Get redirection:
```
GET /redirections/{redirectionId}

200 OK
{
    userId: {userId},
    entry: {domain},
    destination: {domain}
}
```

List all redirections:
```
GET /redirections

200 OK
[
    {
        userId: {userId},
        entry: {domain},
        destination: {domain}
    },
    ...
]
```

Delete redirections:
```
DELETE /redirections/{redirectionId}

200 OK
```
