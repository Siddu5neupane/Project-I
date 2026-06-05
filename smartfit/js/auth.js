import {
    auth,
    provider
} from "./firebase-config.js";

import {
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const googleLogin = document.getElementById("googleLogin");

googleLogin.addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        console.log("Login Success");
        console.log(result.user);

        // Open dashboard immediately
        window.location.href = "./dashboard.html";

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

});