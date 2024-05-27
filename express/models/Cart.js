import { DataTypes } from 'sequelize'

export default async function Cart(sequelize) {
  return sequelize.define(
    'Cart',
    {
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      member_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   model: 'Members', // 要參考的模型名稱
        //   key: 'member_id', // 要參考的欄位名稱
        // },
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'cart', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at',
    }
  )
}
