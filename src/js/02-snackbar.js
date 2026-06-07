
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
iziToast.settings({
    timeout: 3000,
    position: "topRight",
    transitionIn: "fadeInDown",
    transitionOut: "fadeOutUp",
    backgroundColor: "#0f172a",
    titleColor: "#22c55e",
    messageColor: "#e5e7eb",
    progressBarColor: "#22c55e",
    iconColor: "#22c55e",
    close: false,
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const delay = Number(formData.get("delay"));
    const state = formData.get("state");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay} ms.`,
                position: "topRight",
            });
        }).catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay} ms.`,
                position: "topRight",
            });
        });
});

