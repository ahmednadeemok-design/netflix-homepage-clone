/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail() {

    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");

    const email = emailInput.value.trim();

    if (email === "") {

        message.innerHTML = "Please enter your email address.";
        message.style.color = "orange";
        return;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        message.innerHTML =
            "Please enter a valid email address.";

        message.style.color = "red";

    } else {

        message.innerHTML =
            "Email submitted successfully!";

        message.style.color = "lightgreen";

        emailInput.value = "";

    }

}


/* =========================
   FAQ ACCORDION
========================= */

const questions =
    document.querySelectorAll(".question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const isOpen =
            answer.style.display === "block";

        document
            .querySelectorAll(".answer")
            .forEach((item) => {

                item.style.display = "none";

            });

        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});


/* =========================
   MOVIE CARD HOVER EFFECT
========================= */

const movieCards =
    document.querySelectorAll(".movie-row img");

movieCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "10";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =========================
   PAGE LOAD EFFECT
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});