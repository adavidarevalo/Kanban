import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida'),
});

