if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateNav);

// BLOG

// document.getElementById("blog-image").addEventListener("change", function () {
//   const file = this.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const preview = document.getElementById("image-preview");
//       preview.src = e.target.result;
//       preview.style.display = "block";
//     };
//     reader.readAsDataURL(file);
//   }
// });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     document.getElementById("blog-form").style.display = "block";
//     document.getElementById("user-info").innerText = Welcome,` ${user.email}`;
//   } else {
//     document.getElementById("blog-form").style.display = "none";
//     document.getElementById("user-info").innerText = "Please log in to post blogs.";
//   }
// });



// submitBtn.addEventListener("click", async () => {
//   const user = auth.currentUser;
//   if (!user) {
//     alert("Please login first!");
//     return;
//   }

//   const title = titleInput.value.trim();
//   const content = contentInput.value.trim();
//   const imageFile = imageInput.files[0];

//   if (!title || !content || !imageFile) {
//     alert("Please fill all fields.");
//     return;
//   }

//   const imageRef = ref(storage,` blogImages/${Date.now()}_${imageFile.name}`);
//   const snapshot = await uploadBytes(imageRef, imageFile);
//   const imageUrl = await getDownloadURL(snapshot.ref);

//   await addDoc(collection(db, "blogs"), {
//     title,
//     content,
//     imageUrl,
//     userId: user.uid,
//     userEmail: user.email,
//     timestamp: serverTimestamp()
//   });

//   alert("Blog uploaded!");
//   titleInput.value = "";
//   contentInput.value = "";
//   imageInput.value = "";
// });
//BLOG END

// function openSignupModal(){
//     const modal = document.getElementById("loginModal12");
//     if(modal){
//         const inputs = modal.forEach(input => input.value = " ");
//         modal.style.display = "block";
//     }
// }

// function closeModal12(){
//     const modal= document.getElementById("loginModal12");
//     if(modal){
//         const inputs = modal.querySelectorAll("input");
//         inputs.forEach(input => input.value = "");
//         modal.style.display = "none"
//     }
// }

