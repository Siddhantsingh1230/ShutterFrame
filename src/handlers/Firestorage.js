// Import the necessary Firebase SDK
import { getStorage, listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Function to upload a file to Firebase Storage
export const uploadFile = async (fileTitle, file) => {
  try {
    // Create a reference to the storage bucket and specify the filename
    const storageRef = ref(storage, `uploads/${fileTitle}`);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);

    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// Function to retrieve all images from Firebase Storage
export const getAllImages = async () => {
  try {
    // Create a reference to the root of the storage bucket
    const storageRef = ref(storage,"uploads");

    // List all items (images) in the storage bucket
    const listResult = await listAll(storageRef);

    // Array to store the image objects
    const imagesArray = [];

    // Loop through each item and get the download URL
    for (const item of listResult.items) {
      const downloadURL = await getDownloadURL(item);

      // Create an image object with title, file, and fileURL fields
      const imageObject = {
        title: item.name,
        file: item,
        url: downloadURL
      };

      // Add the image object to the images array
      imagesArray.push(imageObject);
    }
    console.log("All images retrieved:", imagesArray);
    return imagesArray;
  } catch (error) {
    console.error("Error retrieving images:", error);
    return [];
  }
};

