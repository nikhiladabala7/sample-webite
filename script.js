let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;
let posts = JSON.parse(localStorage.getItem("posts")) || [];

/* UI SWITCH */
function showSignup() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("signupBox").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signupBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}

/* SIGNUP */
function signup() {
    let admission = document.getElementById("admission").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (!email.endsWith("@srmap.edu.in")) {
        alert("Use SRM email");
        return;
    }

    if (!admission.startsWith("AP25")) {
        alert("Invalid Admission Number");
        return;
    }

    users.push({ admission, email, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully!");
    showLogin();
}

/* LOGIN */
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Invalid login");
        return;
    }

    currentUser = user; // 🔥 IMPORTANT FIX

    document.body.classList.remove("forest");
    document.body.classList.add("tech");

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

/* LOGOUT */
function logout() {
    location.reload();
}

/* CLASSROOM */
function enterClassroom() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("classroomPage").classList.remove("hidden");
    displayPosts();
}

function goBack() {
    document.getElementById("classroomPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

/* POSTS */
function addPost() {
    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;

    if (!title || !content) {
        alert("Fill all fields");
        return;
    }

    let post = {
        title,
        content,
        user: currentUser.email
    };

    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";

    displayPosts();
}

function displayPosts() {
    let postList = document.getElementById("postList");
    postList.innerHTML = "";

    posts.forEach(p => {
        let div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.content}</p>
            <small>${p.user}</small>
        `;
        postList.appendChild(div);
    });
}

/* DASHBOARD CARDS */
function openSection(name) {
    alert(name + " section coming soon 🚀");
}