const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		chatId: { type: Number, required: true },
		type: { type: String, enum: ['private', 'group'], required: true },
		first_name: String,
		last_name: String,
		username: String,
		title: String
	},
	{ versionKey: false }
)

module.exports = model('Chat', schema)
