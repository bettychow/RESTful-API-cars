
const model = require('../models/car')

const getAll = (req, res, next) => {
  const data = model.getAll()
  res.status(200).json({ data })
}

const getOne = (req, res, next) => {
  const data = model.getOne(req.params)
  if(data.errors) {
    return next({ status: 404, message: 'Could not find car', errors: data.errors })
  }
  res.status(200).json({ data })
}

const create = (req, res, next) => {
  const data = model.create(req.body)
  if(data.errors) {
    return next({ status: 400, message: 'Could not create new car', errors: data.errors })
  }
  res.status(201).json({ data })
}

const update = (req, res, next) => {
  const data = model.update(req.params, req.body)
  if(data.errors) {
    return next({ status: 400, message: 'Could not update car info', errors: data.errors })
  }
  res.status(200).json({ data })
}

const del = (req, res, next) => {
  const data = model.del(req.params)
  if(data.errors) {
    return next({ status: 400, message: 'Could not delete car info', errors: data.errors })
  }
  res.status(204).json({ data })
}

module.exports = { getAll, getOne, create, update, del }