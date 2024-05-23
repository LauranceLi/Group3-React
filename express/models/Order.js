import { DataTypes } from 'sequelize'

export default async function Order(sequelize) {
  const Order = sequelize.find(
    'Order',
    {
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      member_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Members', // 要參考的模型名稱
          key: 'member_id', // 要參考的欄位名稱
        },
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_amount: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      net_total: {
        // 總金額扣除積分後的金額
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      shipping_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invoic_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invoice_value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'order', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at',
    }
  )
  return Order
}
