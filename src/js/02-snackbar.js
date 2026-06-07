import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
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

form.addEventListener('submit', onSubmit);