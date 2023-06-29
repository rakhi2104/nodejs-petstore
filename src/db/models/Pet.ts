import {PetAttributes} from "../../services/petstore.types";
import {DataTypes, Model, Optional} from "sequelize";
import * as db from "../config";

interface PetInput extends Optional<PetAttributes, 'id'> {
}

interface PetOutput extends Required<PetAttributes> {
}

class Pets extends Model<PetAttributes, PetInput> implements PetAttributes {
	public id!: number;
	public name!: string;
	public age!: number;
	public species!: string;
	public breed!: string;
	public story?: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

Pets.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	age: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	species: {
		type: DataTypes.STRING,
		allowNull: false
	},
	breed: {
		type: DataTypes.STRING,
		allowNull: false
	},
	story: {
		type: DataTypes.STRING,
		allowNull: true
	}
}, {
	timestamps: true,
	paranoid: true,
	sequelize: db.sequelizeConnection,
})

export default Pets