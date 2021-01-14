  
import { firebase, messaging } from "./services/firebase";
  // Get a reference to the storage service, which is used to create references in your storage bucket
  let storage = firebase.storage();

  // Create a storage reference from our storage service
  let storageRef = storage.ref();
  // Create a child reference
let imagesRef = storageRef.child('images');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
let logoRef = storageRef.child('./file-storage/logo_flstudio.jpeg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"
