import { firestore } from './firebase.js';
import { collection, getDocs } from "firebase/firestore"; 


export const getFirestoreBlog = async () => {
    try {
        const data = {}
        const blogArrayRaw = []
        const blogCollectionSnapshot = await getDocs(collection(firestore, "blog"));
        blogCollectionSnapshot.forEach((doc) => {
            // Retrieving actual blog post data
            const dataObj = doc.data();

            // Data is an object of objects, which are returned as key-value arrays
            blogArrayRaw.push(...Object.entries(dataObj)); // Spread operator added to prevent additional array
        });
        blogArrayRaw.forEach(([key, value]) => {
            // Converting Firebase's timestamp to UTC string through JavaScript Date
            const dataPrep = value;
            const jsDate = value.date.toDate();
            dataPrep.date = jsDate.toISOString();
        
            // Adding processed doc as a property to data object
            data[`${key}`] = dataPrep;
        });
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};
