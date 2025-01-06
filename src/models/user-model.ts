import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize-plugin";

class UserModel extends Model {
    static delete(arg0: { is_deleted: boolean; }, arg1: { where: { user_id: string; }; }) {
        throw new Error("Method not implemented.");
    }
    user_id!: string;
    name!: string;
    email_address!: string;
    address!: string;
    phone_number!: number;
}

UserModel.init(
    {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false
    }
);

export default UserModel;