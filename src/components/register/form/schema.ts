import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required('El nombre de usuario es obligatorio')
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
    .max(20, 'El nombre de usuario no puede tener más de 20 caracteres')
    .matches(/^[a-zA-Z0-9_.-]*$/, 'El nombre de usuario solo puede contener letras, números, guiones bajos, puntos y guiones'),
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El correo electrónico es requerido'),
    password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
      'La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    ),
  repeatPassword: Yup.string()
    .required('La repetición de contraseña es obligatoria')
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
});

