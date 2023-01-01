# chat-app

soon, will be added

Step By Step :

- Make A Firebase Project
- Copy the Css File to Skip Styling
- Activate Google Auth Login from the Authentication in the Firebase
- Create The FireStore and Change the rules
...

- Change The Rules

        rules_version = '2';
        service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if false;
          }
        } 
      }

  to
  
        rules_version = '2';
        service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if true;
          }
        } 
      }

...
