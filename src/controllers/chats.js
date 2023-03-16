const { Router } = require('express')
const ChatModel = require('../models/chat')

const chatsController = Router()

chatsController.get('/', async (req, res, next) => {
	try {
		const chats = await ChatModel.find(req.query)

		res.status(200).send(chats)
	} catch (err) {
		next(err)
	}
})

// chatsController.get('/:id', async (req, res, next) => {
// 	try {
// 		const chat = await ChatModel.findById(req.params.id)

// 		res.status(200).send(chat)
// 	} catch (err) {
// 		next(err)
// 	}
// })

chatsController.get('/chatId/:chatId', async (req, res, next) => {
	try {
		const chat = await ChatModel.findOne(req.params)

		res.status(200).send(chat)
	} catch (err) {
		next(err)
	}
})

chatsController.post('/', async (req, res, next) => {
	try {
		const existing = await ChatModel.findOne(req.body)

		if (existing) return res.status(204).send()

		const newChat = await ChatModel.create(req.body)

		res.status(201).send(newChat)
	} catch (err) {
		next(err)
	}
})

chatsController.patch('/chatId/:chatId', async (req, res, next) => {
	try {
		const updatedChat = await ChatModel.findOneAndUpdate(req.params, req.body, { new: true })

		res.status(200).send(updatedChat)
	} catch (err) {
		next(err)
	}
})

// chatsController.delete('/chatId/:chatId', async (req, res, next) => {
// 	try {
// 		const deletedChat = await ChatModel.findOneAndDelete(req.params)

// 		res.status(200).send(deletedChat)
// 	} catch (err) {
// 		next(err)
// 	}
// })

module.exports = chatsController
