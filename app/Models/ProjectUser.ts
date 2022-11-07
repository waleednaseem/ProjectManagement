import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import User from './User'


export default class ProjectUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
   public user_id: number

  @column()
  public project_id: number

  @column()
  public isProjectCreator: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'user_id',  
    localKey: 'id',
  })
  public myuser: BelongsTo<typeof User>
}
