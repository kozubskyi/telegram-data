const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		title: { type: String, required: true }, // "Футбол"
		description: { type: String, default: null }, // "Формат 5х5, м'яч 4-ка"
		creatorUsername: { type: String, default: null }, // "kozubskyi"
		chatTitle: { type: String, default: null }, // "Me and bots"
		chatId: { type: Number, required: true }, // 123456789
		// type: { type: String, enum: ['single event', 'regular event'], default: 'single event' }, // "single event"
		// days: { type: [String], enum: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], default: null }, // ["Пн", "Чт"]
		location: { type: String, default: null }, // "Броварська"
		start: { type: String, required: true }, // "07.10.2024, 20:30"
		end: { type: String, default: null }, // "07.10.2024, 22:00" or null
		registrationStart: { type: String, default: null }, // "07.10.2024, 09:00" or null
		registrationEnd: { type: String, default: null }, // "07.10.2024, 20:30" or null
		reserveDeadline: { type: String, default: null }, // "07.10.2024, 16:00"
		participantsMin: { type: Number, default: null }, // 10 or null
		participantsMax: { type: Number, default: null }, // 15 or null
		participants: { type: [String], default: [] },
	},
	{ versionKey: false }
)

module.exports = model('Event', schema)
