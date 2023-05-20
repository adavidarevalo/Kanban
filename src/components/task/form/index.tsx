import { InputField } from '@/components/input_form'
import {
  FormControl,
  Text,
  Button,
  Center,
  Box,
  Select,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { FieldArray, Formik } from 'formik'
import { AddIcon } from '@chakra-ui/icons'
import { ColumnField } from './column_field'
import { taskValidationSchema } from './schema'
import { TextAreaField } from './text_area_field'
import { SubTask, TaskFormValues } from '@/types/task'

export interface NewTaskFormProps {
  handleSubmit: (values: TaskFormValues) => void
  title?: string
  description?: string
  subTask?: SubTask[]
  submitButtonContent?: string
  titleContent?: string
  setOpenNewTaskModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewTaskForm = ({
  title,
  description,
  subTask,
  submitButtonContent = 'Create Task',
  titleContent = 'Add New Task',
  handleSubmit,
}: NewTaskFormProps) => {
  const defaultColumn = useMemo(
    () => ({ title: '', isCompleted: false, _id: null }),
    []
  )

  const initialValues: TaskFormValues = {
    title: title || '',
    description: description || '',
    subTask: [defaultColumn],
    currentState: '',
    columnId: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={taskValidationSchema}
    >
      {({ values }) => (
        <FormControl as="fieldset">
          <InputField
            name="title"
            type="text"
            label="Task Name"
            placeholder="e.g. Web Design"
          />
          <TextAreaField
            name="description"
            type="text"
            label="Description"
            placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
          />
          <Text as={'b'}>Subtasks</Text>
          <FieldArray name="subTask">
            {({ push, remove }) => (
              <Box>
                {values.subTask.map((_, index) => (
                  <ColumnField
                    key={index}
                    index={index}
                    name={`subTask[${index}].title`}
                    remove={remove}
                  />
                ))}
                <Center>
                  <Button type="button" onClick={() => push(defaultColumn)}>
                    <AddIcon /> Add New Subtask
                  </Button>
                </Center>
              </Box>
            )}
          </FieldArray>
          {/* <StatusDropdown
  label="Current Status"
  options={columnsOptions as Options[]}
  value={values.columnId as string}
  name="columnId"
/> */}
          <Select placeholder="Selecciona una opción">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </Select>

          <Center>
            <Button type="submit" mt="5">
              {submitButtonContent}
            </Button>
          </Center>
        </FormControl>
      )}
    </Formik>
  )
}
