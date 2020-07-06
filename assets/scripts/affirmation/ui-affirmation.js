const store = require('./../store.js')
const showAffirmationTemplate = require('./../templates/affirmation.handlebars')

const affirmationSuccess = (response) => {
  console.log(response)
  $('#page-two').show()
  $('form').trigger('reset')
  $('#message').text('Neural path embraced!')
  store.affirmation = response.affirmation
  console.log(store.affirmation)
}
const createFailure = (response) => {
  $('#message').text('stay focused & steady')
}
const showAllAffirmationSuccess = (data) => {
  console.log(data)
  console.log('affirmationShowAllSuccess')
  const showAffirmationHtml = showAffirmationTemplate({affirmations: data.affirmation})
  $('#content').html(showAffirmationHtml)
  $('#message').text('Ready to Embrace!')
  // $('#page-two').show()
}
const showAllAffirmationFailure = (data) => {
  $('#message').text('index error')
}

const updateAffirmationSuccess = () => {
  $('#message').text('Updated Affirmation Embraced!')
}
const updateAffirmationFailure = () => {
  $('#message').text('Contant belongs to different User')
}
const releaseSuccess = (affirmationId) => {
  $(`[data-id='${affirmationId}']`).remove()
  $('#message').text('')
}
const releaseFailure = (data) => {
  $('#message').text('Contant belongs to different User')
}
module.exports = {
  affirmationSuccess,
  createFailure,
  showAllAffirmationSuccess,
  showAllAffirmationFailure,
  updateAffirmationSuccess,
  updateAffirmationFailure,
  releaseSuccess,
  releaseFailure
}
