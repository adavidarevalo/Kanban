export interface SubTask {
  title: string
  isCompleted: boolean
  _id: string | null
}

export interface TaskFormValues {
  title: string
  description: string
  subTask: SubTask[]
  currentState?: string
  columnId?: string
}
