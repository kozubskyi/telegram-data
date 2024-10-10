const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		title: { type: String, required: true }, // "Футбол Броварська"
		creatorUsername: { type: String, default: null }, // "kozubskyi"
		chatId: { type: Number, required: true }, // 123456789
		// type: { type: String, enum: ['single event', 'regular event'], default: 'single event' }, // "single event"
		// days: { type: [String], enum: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], default: null }, // ["Пн", "Чт"]
		start: { type: String, required: true }, // "07.10.2024, 20:30"
		end: { type: String, default: null }, // "07.10.2024, 22:00" or null
		registrationStart: { type: String, default: null }, // "07.10.2024, 09:00" or null
		registrationEnd: { type: String, default: null }, // "07.10.2024, 20:30" or null
		reserveDeadline: { type: String, default: null }, // "07.10.2024, 16:00"
		participantsMin: { type: Number, default: null }, // 10 or null
		participantsMax: { type: Number, default: null }, // 15 or null
		participants: { type: [String], default: [] },
		description: { type: String, default: null },
	},
	{ versionKey: false }
)

module.exports = model('Event', schema)
