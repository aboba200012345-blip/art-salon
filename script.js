// Проста імітація відправки форми без сервера
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Дякуємо за повідомлення! Форма працює як навчальний приклад.");
        form.reset();
    });
});
