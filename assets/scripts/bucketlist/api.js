'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexLists = () => {
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = (data) => {
  console.log('in API')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const destroyList = (listId) => {
  console.log('the errror is here')
  return $.ajax({
    url: config.apiUrl + '/list-items/' + listId,
    method: 'DELETE'
  })
}

const updateList = (data) => {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + store.list.id,
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  indexLists,
  createList,
  destroyList,
  updateList
}