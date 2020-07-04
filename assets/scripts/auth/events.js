// here lives
// Event Handlers for Authentication
// callback functions to handle user authentication
'use strict'
// require
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  // prevent refreshing browser template
  event.preventDefault()
  // event.target - The target property of the Event interface
  // is a reference to the object(in DOM) onto which the event was dispatched.
  // dispatched on sign-up form
  const form = event.target
  const data = getFormFields(form)
  // api response to handle user-interface response on DOM
  api.userCreate(data)
    .then(ui.userCreateSuccess)
    .catch(ui.userCreateFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.userSignIn(data)
    .then(ui.userSignInSuccess)
    .catch(ui.userSignInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.userChangePasswordSuccess)
    .catch(ui.userChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
