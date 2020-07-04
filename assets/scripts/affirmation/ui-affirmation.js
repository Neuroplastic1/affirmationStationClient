const store = require('./../store.js')
const showAffirmationTemplate = require('./../templates/affirmation.handlebars')

const createAffirmationSuccess = (response) => {
  console.log(response)
  $('#page-two').show()
  $('form').trigger('reset')
  $('#message').text('Embrace!')
  store.affirmation = response.affirmation
  console.log(store.affirmation)
}
const createAffirmationFailure = (response) => {
  $('#message').text('stay strong and affirmed!')
}
const showAllAffirmationSuccess = (data) => {
  console.log(data)
  console.log('affirmationShowAllSuccess')
  const showAffirmationHtml = showAffirmationTemplate({affirmations: data.affirmation})
  $('#content').html(showAffirmationHtml)
}
const showAllAffirmationFailure = (data) => {
  $('#message').text('?')
}
// const UpdateAffirmationSuccess = (data)
module.exports = {
  createAffirmationSuccess,
  createAffirmationFailure,
  showAllAffirmationSuccess,
  showAllAffirmationFailure
}
