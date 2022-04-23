$(function () {
   $('form').on('submit', function (e) {
      e.preventDefault()

      let url = $('input').val()

      $('form').append(url)
   })
})