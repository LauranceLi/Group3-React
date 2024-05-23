import { DataTypes } from 'sequelize'

export default async function Cart(sequelize) {
  const Cart = sequelize.find(
    'Cart',
    {
      cart_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      member_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Members', // 要參考的模型名稱
          key: 'member_id', // 要參考的欄位名稱
        },
        onDelete: 'CASCADE', // 設定當 Members 被刪除時，相關的 MembersInfo 也會被刪除
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
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      tableName: 'cart', //直接提供資料表名稱
      timestamps: false, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      //   createdAt: 'created_at', // 建立的時間戳
      //   updatedAt: 'updated_at',
    }
  )
  return Cart
}
