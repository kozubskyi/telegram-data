const { Router } = require('express')
const EventModel = require('../models/event')

const eventsController = Router()

eventsController.get('/', async (req, res, next) => {
	try {
		const event = await EventModel.findOne(req.query)

		res.status(200).send(event)

		// const { title, start, chatId } = req.query
		// const response = title && start ? await EventModel.findOne(req.query) : await EventModel.find()
		// res.status(200).send(response)
	} catch (err) {
		next(err)
	}
})

eventsController.post('/', async (req, res, next) => {
	try {
		const { chatId, title, creatorUsername } = req.body

		const updatedEvent = await EventModel.findOneAndUpdate({ chatId, title, creatorUsername }, req.body, { new: true })

		if (updatedEvent) return res.status(200).send(updatedEvent)

		const newEvent = await EventModel.create(req.body)

		res.status(201).send(newEvent)
	} catch (err) {
		next(err)
	}
})

eventsController.patch('/', async (req, res, next) => {
	try {
		const updatedEvent = await EventModel.findOneAndUpdate(req.query, req.body, { new: true })

		res.status(200).send(updatedEvent)
	} catch (err) {
		next(err)
	}
})

eventsController.delete('/', async (req, res, next) => {
	try {
		const deletedEvent = await EventModel.findOneAndDelete(req.query)

		res.status(200).send(deletedEvent)
	} catch (err) {
		next(err)
	}
})

// eventsController.delete('/', async (req, res, next) => {
// 	try {
// 		let response = null

// 		if (!Object.keys(req.query).length) {
// 			response = await EventModel.deleteMany()
// 		} else {
// 			response = await EventModel.findOneAndDelete(req.query)
// 		}

// 		res.status(200).send(response)
// 	} catch (err) {
// 		next(err)
// 	}
// })

module.exports = eventsController
