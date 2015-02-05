define(['jquery', 'helper/todoItem'], function($, todoItem) {
  $(function() {
    var content, $list = $('#list');
    $('#new_todo').on('keypress', function(event) {
      content = $(this).val();
      if (event.keyCode === 13 && content) {
        $list.append(todoItem(content));
        $(this).val('');
      }
    });
  });
});