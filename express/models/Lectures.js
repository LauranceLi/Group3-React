import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  const Lectures = sequelize.define(
    'Lectures',
    {
      lecture_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      speaker: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      introduction: {
        type: DataTypes.TEXT, // Changed to TEXT to handle longer introductions
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      num: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: 'lectures',
      timestamps: true,
      paranoid: false,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  )

  return Lectures
}
