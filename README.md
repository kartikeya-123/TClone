# TEAMS CLONE -WEB

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" width="300px" height="170px" align="center"/>

**A web application similar to Teams having features like video conferencing, team chat, meeting conversations, file storage and many more team related features.**</br>
##### Link for the application https://teamclone-web.herokuapp.com/

## Technologies used

- **NodeJs** -      Evented I/O for the backend
- **Express** -     Fast node.js network app framework
- **Socket.io** -   Package used to create real-time calls and chats.
- **WebRTC**  -     Open-source project for real time communication.
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

```
$ cd ./TClone
$ npm install
$ npm start
```
Environment variables : https://docs.google.com/document/d/1VMlx0EXCyKuWdIhteIIxjzSK4pK2-BX1VkQCsi5To9o/edit?usp=sharing

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

The home pages shows list of teams that a user is in as a member and the teams owned by the user.

![image](https://user-images.githubusercontent.com/56500864/125187430-3c7b3a00-e24d-11eb-84a4-5005fc67dab2.png)

#### Create Team

A user can create a new team by clicking on Create a new team button. User should specify a team name, team description and privacy. Privacy of a team specifies whether only team owner or any team member can add other people into the team.

![image](https://user-images.githubusercontent.com/56500864/125191843-2a57c680-e262-11eb-925a-33295bdb68af.png)


#### Team layout

The major contents of a team include team details, chat room, files storage, and option to start a meeting.

![image](https://user-images.githubusercontent.com/56500864/125187728-a6e0aa00-e24e-11eb-8133-af8be2df481d.png)

#### Team related functions

![image](https://user-images.githubusercontent.com/56500864/125190197-866a1d00-e259-11eb-90bf-c35f1cc11950.png)

##### Add member
If the team is private then this option is only available to the team owner else all the team members can add people into the team. User can search by name or email to add people into the group. Click on submit to add the members into the team.

![image](https://user-images.githubusercontent.com/56500864/125190237-c0d3ba00-e259-11eb-9736-9d126f2dc729.png)

##### Leave Team
Every team member except the owner has this option to leave a team. On clicking on leave team a dialog opens for confirmation.

##### Delete Team
Only the team owner has this feature to delete team. Once a team is deleted then all the members of the team will not have access to the team.

### Team chat
Team members can start group chat with all the team members. Chat also includes the meeting history and the meeting chat.

![image](https://user-images.githubusercontent.com/56500864/125190274-e95bb400-e259-11eb-9152-a3f1c54bede5.png)

### Files
Team members can upload files and only members of the team can view the uploaded files. Select a file by clicking on upload button and then click on submit to upload the file.

![image](https://user-images.githubusercontent.com/56500864/125191868-3ba0d300-e262-11eb-8159-411d25c7ab53.png)


## Team Meeting
Any team member can start a meeting by clicking the link. Once the meeting is started all the team members recieve a notification and also dialog opens up with a ringtone. Members can click on join meeting button which will be redirect to the team meeting room. User can disable audio/video before joining the meet. Click on JOIN to enter into the meeting.

![image](https://user-images.githubusercontent.com/56500864/125190901-31300a80-e25d-11eb-9c57-bd61cf70eb83.png)

### Group Call Room

![image](https://user-images.githubusercontent.com/56500864/125190922-4f960600-e25d-11eb-8b04-2a5bdf3251ad.png)

### Features of group call
#### Audio and video buttons
Users can disable their video and audio anytime by clicking on the microphone and video buttons. Once a user disables his/her video then a blank screen will be visible to others.

![image](https://user-images.githubusercontent.com/56500864/125190962-9c79dc80-e25d-11eb-8f55-fe5da51a4e5b.png)

#### Screenshare
Users can share their screen anytime by clicking on the third button. To stop screen share click on the same button again.

![image](https://user-images.githubusercontent.com/56500864/125190994-c6330380-e25d-11eb-8560-411fc78c50ba.png)

#### Group Chat
Members currently in the team meeting can start a group chat by clicking on the fourth button. Once the meeting is ended (meeting ends when the number of members in the meeting becomes 0) the meeting chat will be visible along with the meeting history in the general team chat.

![image](https://user-images.githubusercontent.com/56500864/125191712-7b1aef80-e261-11eb-9e45-cd9a06ab8566.png)

#### Blue Board
Another interesting feature of the project is blue board. Users can open the blue board by clicking on the last button. We should first open the blue board and if someone starts drawing then we can see what others are drawing on it and viceversa.

![image](https://user-images.githubusercontent.com/56500864/125191155-8e788b80-e25e-11eb-8ce1-2c8e4da3a980.png)

Once a user ends the call they will be redirected back to the team.


### One to One call
To start a direct call click on CALL OTHERS button on the main teams page. To call others click on the last button which will open a dialog where a user can search for other users by name/email and click on them to start a call. The other user will recive a incoming calling dialog with a ringtone sound and he/she can either continue or reject the call. 

![image](https://user-images.githubusercontent.com/56500864/125191491-5a05cf00-e260-11eb-92c2-5f2ad268fb18.png)

Incomming call modal recieved 

![image](https://user-images.githubusercontent.com/56500864/125191526-8cafc780-e260-11eb-88f8-906bfd28be3b.png)


If the call is rejected then the user gets notified about the rejection.
If the other user clicks on continue they will be directed to a call room and then clicking on Accept will start a one to one call between both the users.

![image](https://user-images.githubusercontent.com/56500864/125191546-9d603d80-e260-11eb-9510-1ad569562bfe.png)

Features like screen share and chat are also available in one to one call.


### Live Notifications
Notifications are recieved when a team meeting is started in a group or if the user is added into a team. 

![image](https://user-images.githubusercontent.com/56500864/125191612-fb8d2080-e260-11eb-8fbc-cf4858fa3033.png)

#### Users can logout by clicking on the profile picture and then click on logout.

<hr/>
## Contributor

- **[P Kartikeya](https://www.linkedin.com/in/kartikeya-pochampalli-29a0a319b/)**


#### Feel free to contact for any queries at LinkedIn profiles.
