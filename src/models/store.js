const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		// chat_id: { type: Schema.Types.ObjectId, ref: 'chat' },
		chatId: { type: Number, required: true },
		splitVariant: { type: String, enum: ['', 'Капітанами', 'За скілом', 'Рандомно'], default: '' },
		teamsQuantity: { type: Number, default: 0 },
		players: { type: [String], default: [] },
		captains: { type: [String], default: [] },
		remainedPlayers: { type: [String], default: [] },
		captainsChoice: { type: String, enum: ['', 'Рандомно', 'Вказано'], default: '' },
		teamsData: { type: Object, default: {} },
		sequence: { type: String, enum: ['straight', 'reverse'], default: 'straight' },
		currentTeam: { type: Number, default: 1 },
		lastChosenPlayers: { type: [String], default: [] },
	},
	{ versionKey: false }
)

module.exports = model('Store', schema)
