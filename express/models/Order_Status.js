import { DataTypes } from 'sequelize'

export default async function OrderStatus(sequelize) {
  return sequelize.define(
    'OrderStatus',
    {
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'order_status', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at',
    }
  )
}
