import { db } from './firebase';
import { ref, get } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * ASYNC | Fetches Project data from Firebase Realtime Database. 
 * @returns A Promise object. Upon fulfilled, a data array that contains objects per project.
 */
export const getFirebaseProjects = async () => {
    try {
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const projects = snapshot.val();
            return projects;
        } else {
            console.log("No data available. Attempted to get Projects.");
        }
    } catch(error) {
        console.log(error);
    } 
};

/**
 * ASYNC | Fetches Misc data from Firebase Realtime Database.
 * @returns A Promise object. Upon fulfilled, a data object that contains misc objects.
 */
export const getFirebaseMisc = async () => {
    try {
        const dbRef = ref(db, 'misc');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const misc = snapshot.val();
            return misc;
        } else {
            console.log("No data available. Attempted to get Misc.");
        }
    } catch(error) {
        console.log(error);
    } 
};
