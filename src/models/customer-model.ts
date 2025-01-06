import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize-plugin";

class CustomerModel extends Model {
    static delete(arg0: { is_deleted: boolean; }, arg1: { where: { customer_id: string; }; }) {
        throw new Error("Method not implemented.");
    }
    customer_id!: string;
    customer_name!: string;
    email!: string;
    address!: string;
    phone_number!: number;
}

CustomerModel.init(
    {
        customer_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: true
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
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
        tableName: "customers",
        timestamps: false
    }
);

export default CustomerModel;