import { model, models, Schema } from 'mongoose'

const SettingsSchema = new Schema({
	number: { type: String },
})

export const Settings = models?.Settings || model('Settings', SettingsSchema)
