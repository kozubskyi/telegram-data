const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		// chat_id: { type: Schema.Types.ObjectId, ref: 'chat' },
		chatId: { type: Number, required: true },
		type: { type: String, enum: ['private', 'group', 'supergroup'], required: true },
		first_name: String,
		last_name: String,
		username: String,
		title: String,
		splitVariant: { type: String, enum: ['', 'Капітанами', 'За скілом', 'Рандомно'], default: '' },
		teamsQuantity: { type: Number, default: 0 },
		players: { type: [String], default: [] },
		captains: { type: [String], default: [] },
		remainedPlayers: { type: [String], default: [] },
		teamsData: { type: Object, default: {} },
		captainsChoice: { type: String, enum: ['', 'Рандомно', 'Вказано'], default: '' },
		sequence: { type: String, enum: ['straight', 'reverse'], default: 'straight' },
		currentTeam: { type: Number, default: 1 },
		lastChosenPlayers: { type: [String], default: [] }
	},
	{ versionKey: false }
)

module.exports = model('Store', schema)
