import { model, models, Schema } from 'mongoose'

const ObjectsSchema = new Schema({
	mainNumber: {type: String},
	numberOne: {type: String},
	numberTwo: {type: String},
	numberThree: {type: String},
})

export const Objects = models?.Objects || model('Objects', ObjectsSchema)
