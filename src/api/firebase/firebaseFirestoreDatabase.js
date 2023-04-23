import { firestore } from './firebase.js';
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 


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

export const getFirestoreBlogPost = async (id) => {
    try {
        const blogPostRef = doc(firestore, "blog-posts", `${id}`);
        const blogPostSnap = await getDoc(blogPostRef);
        if (blogPostSnap.exists()) {
            const dataObj = {
                id: id
            }
            const encodedData = blogPostSnap.data()
            const decodedData = atob(encodedData.body)
            dataObj.body = decodedData;
            return dataObj;
        } else {
            console.log("No document was found.");
        }
    } catch(error) {
        console.log(error);
        throw error;
    }
};
