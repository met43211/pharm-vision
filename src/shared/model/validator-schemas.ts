import * as Yup from 'yup';

export const ValidatorSchemas = {
  name: Yup.string()
    .required('Введите имя')
    .matches(
      /^[а-яА-ЯёЁ]+$/,
      'Имя должно содержать только кириллические символы',
    )
    .min(2, 'Слишком короткое имя')
    .max(16, 'Слишком длинное имя'),
  surname: Yup.string()
    .required('Введите фамилию')
    .matches(
      /^[а-яА-ЯёЁ]+$/,
      'Фамилия должна содержать только кириллические символы',
    )
    .min(2, 'Слишком короткая фамилия')
    .max(20, 'Слишком длинная фамилия'),
  login: Yup.string()
    .required('Введите логин')
    .min(3, 'Слишком короткий логин')
    .max(16, 'Слишком длинный логин'),
  phone: Yup.string()
    .required('Введите номер телефона')
    .matches(
      /^\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      'Некорректный номер телефона',
    ),
  address: Yup.object().required('Укажите Ваш город'),
  password: Yup.string()
    .required('Введите пароль')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .max(20, 'Пароль не должен превышать 20 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать минимум одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать минимум одну строчную букву')
    .matches(/[0-9]/, 'Пароль должен содержать минимум одну цифру')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Пароль должен содержать минимум один специальный символ',
    )
    .matches(
      /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/,
      'Пароль должен содержать только латинские буквы, цифры и специальные символы',
    ),
};
