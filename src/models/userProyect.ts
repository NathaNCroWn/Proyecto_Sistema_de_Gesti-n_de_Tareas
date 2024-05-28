import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "user",
  timestamps: true, // Añade automáticamente `createdAt` y `updatedAt`
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;
}
export default User;