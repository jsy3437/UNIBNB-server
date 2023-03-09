import { DataTypes, Model } from 'sequelize';

export default class User extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.BIGINT,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				firstName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				lastName: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				birthday: {
					type: DataTypes.DATE,
					allowNull: false,
				},
			},
			{
				sequelize,
				timestamps: true,
				underscored: false,
				modelName: 'User',
				tableName: 'users',
				paranoid: true,
				charset: 'utf8',
				collate: 'utf8_general_ci',
			}
		);
	}
}
