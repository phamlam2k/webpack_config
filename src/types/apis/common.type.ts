export interface Response<T> {
  statusCode?: number
  message?: string
  metadata?: T
}
