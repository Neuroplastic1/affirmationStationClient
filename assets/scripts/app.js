'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const affirmationEvents = require('./affirmation/events-affirmation.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#fold-list').on('click', affirmationEvents.onFoldingList)
  $('#Create-affirmation').on('submit', affirmationEvents.onCreateAffirmation)
  $('#show-allaffirmation').on('click', affirmationEvents.onShowAllAffirmation)
  $('#realeaseAffirmation').on('click', affirmationEvents.onLettingGo)
  $('#upgrade-affirmation').on('click', affirmationEvents.onUpdateAffirmation)
  $('.content').on('click', '.remove-affirmation', affirmationEvents.onLettingGo)
  $('#page-two').hide()
  // $('#Change-password').hide()
  // $('#sign-out').hide()
  // $('#showOneAffirmation').hide()
  // $('.Create-affirmation').hide()
  // $('#show-allaffirmation').hide()
  // $('.update-affirmation-form').hide()
})
