define(['jquery'], function($) {
  var $item = $('<li/>'),
      $delButton = $('<button class="del" />'),
      $doneRadio = $('<input type="checkbox">');
  return function(content) {
    $item.text(content);
    $delButton.text('Del');
    $doneRadio.click(function() {
      var $this = $(this);
      if($this.is(':checked')) {
        $(this).parent().css('color', 'lightgray');
        $(this).siblings('.del').prop('disabled', true);
      } else {
        $(this).parent().css('color', 'black');
        $(this).siblings('.del').prop('disabled', false);
      }
    });
    $delButton.click(function() {
      $(this).parent().remove();
    });
    $item.append($doneRadio).append($delButton);
    return $item.clone(true);
  };
});