import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "task",
  timestamps: true, // Añade automáticamente `createdAt` y `updatedAt`
})
export class Task extends Model<Task> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: Text;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  expirationDate: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  state: string;
}
export default Task
