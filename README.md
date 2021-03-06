# facebook-api
## _The Last social network REST API you'll ever need, I swear !_

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)

facebook-api is a node compatible, social network REST API,
coded in JavaScript.

- Project to be returned before Mars 4th at 23:42
- Feel free to give me bonus points for happiness and "joie de vivre"
- ✨Magic✨

## Features

- SECURE each user with HASHED passwords
- POST new users
- GET Users, Profiles and Posts
- POST new posts 
- DELETE Users and Profiles 
- UPDATE Posts
- And many more that I didn't want to take time to write here :) 

facebook-api is a basic lightweight social network REST API.

> The purpose of this challenge is to create a simple social network API. 

This text you see here is written with lots of love ! To get a feel
for a truly great README.md file.

## Installation

facebook-api requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies with ```npm install``` before tryinbg to use either the server or the client (do this in each folder).

```sh
npm install
```

You have several choices to run, build, and start a transcrypted version of either the server or the client : 

```sh
npm run dev #Used to try it in a dev environment 
npm run build #Transcypt the code thanks to Babel
npm run start #Test your production environment, best performance you can get (you need to have built the code beforehand)
```

## Execute 

Once you've done the steps above, you should have a ```.dist``` folder in your client or server folder according to the one you've built. 

You can execute your final code by doing so : 

```sh
cd .dist
node main.js
```
## API Routes

## `/api/v1/authentication`
### DTOs
| name          | schema                               |
|:--------------|:-------------------------------------|
| `LoginDto`    |`{ email: string, password: string }` |
| `RegisterDto` |`{ email: string, password: string }` |

### URIs
| method | endpoint    | headers   | body         | Response                          | description                              |
|:-------|:------------|:----------|:-------------|:----------------------------------|:-----------------------------------------|
| `POST` | `/login`    | `null`    |`LoginDto`    | `{ user: User, token: JwtToken }` | return a JWT Token for authentication.   |
| `POST` | `/register` | `null`    |`RegisterDto` | `{ user: User}`                   | register a new User.                     |

## `/api/v1/users`

### DTOs
| name            | schema                                      |
|:----------------|:--------------------------------------------|
| `UpdateProfile` | `{ firstName?: string, lastName?: string }` |

### URIs
| method   | endpoint       | headers                | body            | Response               | description                    |
|:---------|:---------------|:-----------------------|:----------------|:-----------------------|:-------------------------------|
| `GET`    | `/:id/posts`   | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }`    | return a list of User's posts. |
| `GET`    | `/:id/profile` | `Authorization: TOKEN` | `null`          | `{ profile: Profile }` | return a User's profile.       |
| `PATCH`  | `/:id/profile` | `Authorization: TOKEN` | `UpdateProfile` | `{ profile: Profile }` | update a User's profile.       |
| `DELETE` | `/:id`         | `Authorization: TOKEN` | `null`          | `null`                 | delete an user by it's id.     |

## `/api/v1/posts`

### DTOs
| name            | schema                  |
|:----------------|:------------------------|
| `CreatePostDto` | `{ message: string }`   |
| `UpdatePostDto` | `{ message?: string }`  |

### URIs
| method   | endpoint | headers                | body            | Response            | description            |
|:---------|:---------|:-----------------------|:----------------|:--------------------|:-----------------------|
| `POST`   | `/`      | `Authorization: TOKEN` | `CreatePostDto` | `{ post: Post }`    | create a new Post.     |
| `GET`    | `/:id`   | `Authorization: TOKEN` | `null`          | `{ post: Post }`    | return a Post.         |
| `GET`    | `/`      | `Authorization: TOKEN` | `null`          | `{ posts: Post[] }` | return a list of Post. |
| `PATCH`  | `/:id`   | `Authorization: TOKEN` | `UpdatePostDto` | `{ post: Post }`    | update a Post.         |
| `DELETE` | `/:id`   | `Authorization: TOKEN` | `null`          | `null`              | delete a Post.         |

## Commands 

The server handles the commands tested with postman, and provided in a JSON file in the repo : *Facebook API.postman_collection.json*

## License

None :) 
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Made with ❤️ by Milo ROCHE-VANDENBROUCQUE 
