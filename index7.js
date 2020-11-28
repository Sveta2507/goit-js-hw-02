const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (let loginelm of allLogins) {
      if (loginelm === login) return false;
        }
        return true;
    };

let msg;
const addLogin = function(allLogins, login) {
    let validLogin = isLoginValid(login);
    let uniqueLogin = isLoginUnique(allLogins, login);
    if (!validLogin) {
        msg = "Ошибка! Логин должен быть от 4 до 16 символов";
    } else {
    if (!uniqueLogin) {
        msg = "Такой логин уже используется!";
    } else {
        allLogins.push(login);
        msg = "Логин успешно добавлен!";
        }
    }
    return msg;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'