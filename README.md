# TEAMS CLONE -WEB

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" width="300px" height="170px" align="center"/>

**_A web application similar to Teams having features like video conferencing, team chat, meeting conversations, file storage and many more team related features.**

## Technologies used

- **NodeJs** -      Evented I/O for the backend
- **Express** -     Fast node.js network app framework
- **Socket.io** -   Package used to create real-time chats.
- **MongoDB** -     NoSQL Database
- **React.js** -    Javascript llibrary to build user frameworks.
- **GoogleOAuth** - Open Authorization from Google
- **MaterialUI** -  React components based on Material Design, responsive web application for all screen sizes.

## Running the WebApp locally

Install the Node Package Manager latest version

```
$ npm install npm@latest-g
```

Fork this repo and clone it

```
$ git clone https://github.com/<Your User Name>/TClone.git
```

Open the folder TClone and install the dependencies.<br/>
Ask us for the environment variables and create a .env file.

```
$ cd ./TClone
$ npm install
$ npm start
```

Open the client folder in different terminal and install the dependencies

```
$ cd ./TClone/client
$ npm i
$ npm start
```

The backend server and client server run at ports 3000 and 3001 i.e. http://localhost:3000/ and http://localhost:3001/ respectively.


## Features

The major features of the project are:

- Authentication
- Teams
- One to One video conversations
- Live Notifications

### Authentication

The application uses Google OAuth for signing in. The authentication is done using jwt auth, server sends a jwt token to the client which is used to keep the user logged in.
![image](https://user-images.githubusercontent.com/56500864/125186749-cf19da00-e249-11eb-9964-38fe1e54abdc.png)

### Teams

Getting the right people to discuss and collaborate at the right time is often tough, more so when the semester goes on virtually.
We provide three forum to reduce this gap.

#### Create Team

A directory of our students which supports search based on skills, positions of responsibilities, student activities and, of course, branch and year.

#### Team layout

A platform where students can post there projects with relevant details and supporting tags and ask for collaborators by provding necessary communication details. Students are notified when a project's tag matches one in their profile.

#### Team related functions

A forum where students can ask questions to each other and their seniors. The forum also allows anonymous questions and answers to allow free expression of views.

### Team chat

The portal is to promote effective classroom interaction and assginment management.

College admins can create courses with teachers in it. Teachers thus can enroll students in their courses. <br/>
Students can have realtime chats in the classroom with peers and teacher. Teachers can post assignments with deadlines and review the submission. Students are provided with a calender where they can view all assignments having deadlines on a particular date.

<hr/>





## Contributors

- **[P Kartikeya](https://www.linkedin.com/in/kartikeya-pochampalli-29a0a319b/)**


#### Feel free to contact for any queries at LinkedIn profiles.
