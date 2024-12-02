// Запрашиваем имя у пользователя
const userName = prompt("Как вас зовут?");

// Добавляем стили к странице
document.body.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: blue;
    color: yellow;
    font-family: Arial, sans-serif;
    font-size: 2rem;
    margin: 0;
`;

// Если пользователь ввел имя
if (userName && userName.trim() !== "") {
    // Создаем новый элемент div
    const nameElement = document.createElement("div");
    // Устанавливаем текстовое содержимое
    nameElement.textContent = userName;
    // Добавляем элемент в body
    document.body.appendChild(nameElement);
} else {
    // Если пользователь не ввел текст
    const errorElement = document.createElement("div");
    errorElement.textContent = "Вы не ввели имя!";
    document.body.appendChild(errorElement);
}




