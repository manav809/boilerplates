import mongoose, { ObjectId, Schema, Model, model } from "mongoose";

export interface HostAttributes {
  _id: ObjectId;
  email: string;
  phonenumber: string;
}

export const HostSchema: Schema<HostAttributes> = new Schema<HostAttributes>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: false,
  },
});

export const HostModel: Model<HostAttributes> = model<HostAttributes>(
  "hosts",
  HostSchema,
);
