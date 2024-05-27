import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  const MembersInfo = sequelize.define(
    'MembersInfo',
    {
      sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_num: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 15], // 限制整數的位數在 8 到 15 之間
        },
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
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
      tableName: 'members_info',
      timestamps: true,
      paranoid: false,
      underscored: true,
    }
  )

  return MembersInfo
}
