import { HttpResponse } from '../protocols'
import { ServerError } from '../error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const InternalError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
