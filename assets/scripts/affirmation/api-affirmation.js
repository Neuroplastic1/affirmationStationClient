'use strict'

const config = require('./../config')
const store = require('./../store')

const createAffirmation = function (data) {

  return $.ajax({
    url: config.apiUrl + '/affirmation',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      affirmation: {
        thought: data.affirmation.thought,
        context: data.affirmation.context,
        creator: data.affirmation.creator
      }
    }
  })
}

const fullArrayOfAffirmations = function (data) {
  // console.log(store.user._id)

  return $.ajax({
    url: config.apiUrl + '/affirmation',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      affirmation: {
        owner: store.user._id
      }
    }
  })
}

const improveAffirmation = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/affirmation/' + data.affirmation.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      affirmation: {
        thought: data.affirmation.thought,
        context: data.affirmation.context,
        creator: data.affirmation.creator
      }
    }
  })
}

const deleteAffirmation = function (affirmationId) {
  return $.ajax({
    url: config.apiUrl + '/affirmation/' + affirmationId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createAffirmation,
  fullArrayOfAffirmations,
  improveAffirmation,
  deleteAffirmation
}
