# Accountable.me

<br>

# Quick Compo

<br>

## Description

This is an app users can create their own interactive to-do lists and share them with friends, to keep each other accountable.

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing my to-do lists.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing my to-do lists.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page:**: As a logged in user I can visit my profile page so that I can access the edit page.
-  **My Dashboard:** As a logged in user I can access my dashboard page so that I can my to-do list.
-  **Friends To-do Lists:** As a logged in user I can access the friends page so that I can views my friends to-do lists.
-  **Add Friends:** As a user I can add other users to my friends list.



## Backlog

- Add chat funcionality
- users can bet
- Add history page

<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | LoginPage            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | DashboardPage        | public `<Route>`           | Home page. Includes To-Do List and friends Overview       |
| `/user-profile`              | ProfilePage          | user only `<PrivateRoute>` | User profile.                                             |
| `/friends`                   | FriendsPage          | user only `<PrivateRoute>` | Friends Page.                                             |




## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- Friends Page


  

Components:
- Navbar
- Chat






## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`


  



<br>


# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
	userProfile: { type: Schema.Types.ObjectId, ref:'User' },
  createdTasks: [ { type: Schema.Types.ObjectId, ref:'Task' } ]
}
```



**Task model**

```javascript
 {
   name: { type: String, required: true },
   collaborators: [ { type: Schema.Types.ObjectId, ref:'Friend' } ],
   deadline: {type: date, required: true},
   description: {type: string},
   img: { type: String },
 }
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/api/tasks`           |                              |                | 400          | Show all tournaments                                         |
| GET         | `/api/tasks/:id`       |                              |                |              | Show specific task                                           |
| POST        | `/api/tasks`           | { name, img, players }       | 201            | 400          | Create and save a new task                                   |
| PUT         | `/api/tasks/:id`       | { name, img, players }       | 200            | 400          | edit task                                                                  |
| DELETE      | `/api/tasks/:id`       |                              | 201            | 400          | delete task                                                            |

<br>

## API's

<br>

## Packages

<br>
MERN Stack: 
Mongoose
Node
Express
React


## Links

### Trello/Kanban

[Trello Board](https://trello.com/invite/b/hikm8KZI/ATTI8787b0ae97ace311006ac1652a283b7e6E3DBAE1/ironhack-project-3-accountableme)

### Git

The url to your repository and to your deployed project
[GitRepo](https://github.com/joaocravidao/accountable-frontend)


### Slides

### Contributors

João Cravidão - <joaocravidao> - <https://www.linkedin.com/in/jo%C3%A3o-cravid%C3%A3o-792b9b50/>

Jakob Bodendieck - <jakob-bodendieck> - <https://www.linkedin.com/in/jakob-bodendieck/>