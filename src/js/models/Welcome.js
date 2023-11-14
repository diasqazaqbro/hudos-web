import { model, models, Schema } from 'mongoose'

const WelcomeSchema = new Schema({
	welcomeTitle: { type: String },
	welcomeSupTitle: { type: String },
	welcomeDesc: { type: String },
})

export const Welcome = models?.Welcome || model('Welcome', WelcomeSchema)
