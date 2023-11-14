import { model, models, Schema } from 'mongoose'

const FaqSchema = new Schema({
	oneTitle: { type: String },
	oneSupTitle: { type: String },
	twoTitle: { type: String },
	twoSupTitle: { type: String },
	threeTitle: { type: String },
	threeSupTitle: { type: String },
})

export const Faq = models?.Faq || model('Faq', FaqSchema)
