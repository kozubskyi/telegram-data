const { Router } = require('express')
const StoreModel = require('../models/store')

const storesController = Router()

storesController.get('/', async (req, res, next) => {
	try {
		const allStores = await StoreModel.find(req.body)

		res.status(200).send(allStores)
	} catch (err) {
		next(err)
	}
})

storesController.get('/:id', async (req, res, next) => {
	try {
		const store = await StoreModel.findById(req.params.id)

		res.status(200).send(store)
	} catch (err) {
		next(err)
	}
})

storesController.get('/chatId/:chatId', async (req, res, next) => {
	try {
		const store = await StoreModel.findOne(req.params)

		res.status(200).send(store)
	} catch (err) {
		next(err)
	}
})

storesController.post('/', async (req, res, next) => {
	try {
		const existing = await StoreModel.findOne(req.body)

		if (existing) return res.status(204).send()

		const newStore = await StoreModel.create(req.body)

		res.status(201).send(newStore)
	} catch (err) {
		next(err)
	}
})

storesController.patch('/chatId/:chatId', async (req, res, next) => {
	try {
		const updatedStore = await StoreModel.findOneAndUpdate(req.params, req.body, { new: true })

		res.status(200).send(updatedStore)
	} catch (err) {
		next(err)
	}
})

storesController.delete('/chatId/:chatId', async (req, res, next) => {
	try {
		const deletedStore = await StoreModel.findOneAndDelete(req.params)

		res.status(200).send(deletedStore)
	} catch (err) {
		next(err)
	}
})

module.exports = storesController
