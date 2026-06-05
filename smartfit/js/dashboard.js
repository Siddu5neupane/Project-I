import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const logoutBtn =
document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Topbar
    document.getElementById("topbar-name").innerText =
        user.displayName;

    document.getElementById("topbar-email").innerText =
        user.email;

    document.getElementById("topbar-avatar").innerHTML =
        `<img src="${user.photoURL}" class="w-full h-full object-cover">`;

    // Right Profile Card
    document.getElementById("profile-name").innerText =
        user.displayName;

    document.getElementById("profile-email").innerText =
        user.email;

    document.getElementById("profile-avatar").innerHTML =
        `<img src="${user.photoURL}" class="w-full h-full object-cover">`;

    // Welcome message
    document.getElementById("welcome-firstname").innerText =
        user.displayName.split(" ")[0];
});

if(logoutBtn){
    logoutBtn.addEventListener("click", async () => {

        await signOut(auth);

        window.location.href = "login.html";
    });
}