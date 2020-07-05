const store = require('./../store.js')
const showAffirmationTemplate = require('./../templates/affirmation.handlebars')

const affirmationSuccess = (response) => {
  console.log(response)
  $('#page-two').show()
  $('form').trigger('reset')
  $('#message').text('Embrace!')
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
  // $('#page-two').show()
}
const showAllAffirmationFailure = (data) => {
  $('#message').text('index error')
}

const updateAffirmationSuccess = () => {
  $('#message').text('')
}
const releaseSuccess = (affirmationId) => {
  $(`[data-id='${affirmationId}']`).remove()
  $('#delete-message').text('Travel has been deleted')
}
const releaseFailure = (data) => {
  $('#message').text('release error')
}
module.exports = {
  affirmationSuccess,
  createFailure,
  showAllAffirmationSuccess,
  showAllAffirmationFailure,
  updateAffirmationSuccess,
  releaseSuccess,
  releaseFailure
}
