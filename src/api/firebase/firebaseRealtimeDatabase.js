import { db } from './firebase';
import { ref, get } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseProjects = async () => {
    try {
        const dbRef = ref(db, 'projects');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const projects = snapshot.val();
            return projects;
        } else {
            console.log("No data available");
        }
    } catch(error) {
        console.log(error);
    } 
};
