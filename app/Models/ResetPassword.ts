import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ResetPassword extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public  user_id: string

  @column()
  public rest_code : string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
