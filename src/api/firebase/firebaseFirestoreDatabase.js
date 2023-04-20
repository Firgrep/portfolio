import { firestore } from './firebase.js';
import { collection, getDocs } from "firebase/firestore"; 


export const getFirestoreBlog = async () => {
    try {
        const data = {}
        const blogCollectionSnapshot = await getDocs(collection(firestore, "blog"));
        blogCollectionSnapshot.forEach((doc) => {
            // Retrieving actual blog post data
            const dataPrep = doc.data();

            // Converting Firebase's timestamp to UTC string through JavaScript Date
            const jsDate = dataPrep.date.toDate();
            dataPrep.date = jsDate.toISOString();

            // Adding processed doc as a property to data object
            data[`${doc.id}`] = dataPrep;
        });
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};
