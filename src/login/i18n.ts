import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
  en: {
    login: 'Login',
    signIn: "Sign in to your account",
    password: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    noAccount: "Don’t have an account yet?",
    signUp: "Sign up",
    signInShort: "Sign in",
    projectInfo: "Integrating keycloack into the frontend",
    projectDescr: 'Used keycloakify along with tailwind css and flowbite',
    author: 'Made by Yana Kukhta',
    authorDescr: 'My other works can be viewed on my github profile',
    dockerDescr: 'To view it you need to run docker-container',
    createUser: 'Create new user',
    email: "Email address",
    confirmPassword: 'Confirm password',
    firstName: 'Fist name',
    lastName: 'Last name',
    phoneNumber: 'Phone number',
    company: 'Company',
    register: 'Register',
    haveAccount: 'Have an account?'
  },
  ru: {
    login: 'Логин',
    signIn: "Войти в аккаунт",
    password: "Пароль",
    rememberMe: "Запомнить меня",
    forgotPassword: "Забыли пароль?",
    noAccount: "У Вас нет аккаунта?",
    signUp: "Зарегистрироваться",
    signInShort: "Войти",
    projectInfo: "Интеграция keycloack во фронтенд",
    projectDescr: "Использовался keycloakify вместе с tailwind css и flowbite",
    author: 'Сделала Яна Кухта',
    authorDescr: 'Другие мои работы можно посмотреть на моём профиле в github',
    dockerDescr: 'Для просмотра необходимо поднять docker-container',
    createUser: 'Создание нового пользователя',
    email: "Email адрес",
    confirmPassword: 'Подтвеердите пароль',
    firstName: 'Имя',
    lastName: 'Фамилия',
    phoneNumber: 'Номер телефона',
    company: 'Организация',
    register: 'Зарегистрироваться',
    haveAccount: 'Уже есть аккаунт?'
  }
});

export type I18n = typeof ofTypeI18n;
