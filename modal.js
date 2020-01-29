// Upon clicking a photo, (1) modal display fades in
// (2) model-content tag updates with currentImage
// (3) currentImage is highlighted with a blue border
// (4) href disabled
// (5) blue border remains until another photo is clicked

$('.photos a').on('click', function openModal() {
  var currentImage = $(this).html()
  $('.modal-content').html(currentImage)
  $('.modal').fadeIn(500)
  $('.photos a').removeClass('clicked')
  $(this).addClass('clicked')

  return false
})

// By clicking 'Close' or modal-background, (1) modal display fades out
// (2) href disabled

$('.modal-close, .modal-background').on('click', function closeModal() {
  $('.modal').fadeOut(500)

  return false
})
