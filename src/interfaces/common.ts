import { IGenericErrorMessages } from './IGenericErrorMessages'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessages[]
}
