import { model, models, Schema } from "mongoose";

const ServicesSchema = new Schema({
  oneTitle: { type: String },
  oneSupTitle: { type: String },
  oneDesc: { type: String },
  twoTitle: { type: String },
  twoSupTitle: { type: String },
  twoDesc: { type: String },
  threeTitle: { type: String },
  threeSupTitle: { type: String },
  threeDesc: { type: String },
  fourTitle: { type: String },
  fourSupTitle: { type: String },
  fourDesc: { type: String },
});

export const Services = models?.Services || model("Services", ServicesSchema);
