const uuid = require ('uuid/v4')

const cars = []

const getAll = () => {
  return cars
}

const getOne = (params) => {
  let errors = []
  let id = params.id
  let response
  let carFound = cars.find(car => car.id === id)

  if(carFound) {
    response = carFound
  } else {
    errors.push('Id not found')
    response = { errors }
  }
  return response
}

const create = (body) => {
  let errors = []
  let make = body.make
  let model = body.model
  let year = body.year
  let car = {}
  let response

  if(make && model && year) {

    car.id = uuid()
    car.make = make
    car.model = model
    car.year = year
    
    cars.push(car)
    response = car
  } else {
    errors.push('Make, model and year are required')
    response = { errors }
  }

  return response
}

const update = (params, body) => {
  let errors = []
  let id = params.id
  let make = body.make
  let model = body.model
  let year = body.year
  let response
  
  if(make && model && year) {
    const carFound = cars.find(car => car.id === id)
    carFound.make = make
    carFound.model = model
    carFound.year = year
    response = carFound
  } else {
    errors.push('Make, model and year are required')
    response = { errors }
  }
  return response
}

const del = (params) => {
  let errors = []
  let id = params.id
  let carFound = cars.find(car => car.id === id)
  let response

  if(carFound) {
    let index = cars.indexOf(carFound)
    cars.splice(index, 1)
    response = cars
  } else {
    errors.push('Id not found')
    response = { errors }
  }
  return response
}

module.exports = { getAll, getOne, create, update, del }