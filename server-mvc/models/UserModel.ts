import { ObjectId, Schema, Model, model } from "mongoose";

export interface UserAttributes {
  _id: ObjectId;
  name: string;
}

export const UserSchema: Schema<UserAttributes> = new Schema<UserAttributes>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const UserModel: Model<UserAttributes> = model<UserAttributes>(
  "User",
  UserSchema
);
