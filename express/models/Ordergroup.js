import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'ItineraryOrder',
    {
      order_group_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      travel_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deposit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deposit_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      final_payment: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      final_payment_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      member_id: {
        // 新增 member_id 作為外鍵
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Members', // 要參考的模型名稱
          key: 'member_id', // 要參考的欄位名稱
        },
        onDelete: 'CASCADE', // 設定當 Members 被刪除時，相關的 MembersInfo 也會被刪除
      },
    },
    {
      tableName: 'order_group', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
