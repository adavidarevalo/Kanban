import * as Yup from 'yup'

export const taskValidationSchema = Yup.object({
  title: Yup.string().required('El nombre es requerido'),
  description: Yup.string().required('La descripción es requerido'),
  subTask: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('El SubTask es requerido'),
      isCompleted: Yup.boolean().required(),
    })
  ),
  currentState: Yup.string().required('La currentState es requerido'),
})
