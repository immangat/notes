# React Notes App with Firebase

A simple and interactive notes application built using React, Styled Components, and Firebase.

![Demo](https://github.com/immangat/notes/blob/main/project_media/notesdemo.gif)

## Features

- Create, edit, and delete notes.
- Real-time data synchronization using Firebase Firestore.
- Stylish and responsive design with Styled Components.
- Authentication and user-specific data storage with Firebase Authentication.
- Secure and scalable cloud database with Firebase Firestore.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your computer. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-notes-repo.git
cd your-notes-repo
```

2. Install the project dependencies:

```bash
npm install
```

3. Configure Firebase:

    - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
    - Set up Firebase Authentication and Firebase Firestore.
    - Obtain your Firebase configuration object.
    - Create a `.env` file in the project root and add your Firebase configuration:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

4. Run the development server:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Deployment

You can deploy this application to your preferred hosting platform. For example, you can use [Firebase Hosting](https://firebase.google.com/docs/hosting) for deploying your React app.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Styled Components](https://styled-components.com/) - CSS-in-JS library for styling React components.
- [Firebase](https://firebase.google.com/) - A comprehensive mobile and web application development platform.

## Contributing

Feel free to contribute to this project! You can open issues, create pull requests, or provide suggestions for improvement.

_## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc._

---
