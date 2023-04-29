import { firestore } from './firebase.js';
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 

/**
 * ASYNC | Fetches Blog data from the Firestore Database. The timestamp value of each nested object
 * is converted to ISO string to avoid non-serializable values in the Redux state. 
 * @returns A Promise object. Upon fulfilled, a data object that contains nested blog-item objects.
 */
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

/**
 * ASYNC | Fetches Blog Post data from the Firestore Database based on given ID. 
 * The post body is retrieved as base64 string and is first decoded into 
 * semantic string before passed to the Redux state. 
 * @param {string} id - unique blog post object ID.
 * @returns A Promise object. Upon fulfilled, a data object that contains body (string) and id (string).
 */
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
