import * as Yup from 'yup';

export const validationCodeSchema = Yup.object().shape({
  validationCode: Yup.string()
    .required('El codigo de verificacion es requerido')
    .matches(/^\d{6}$/, 'El código invalido.')
});

