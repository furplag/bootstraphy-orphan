$(function () {
  'use strict';

  test('should not open dropdown if target is disabled via attribute', function () {
    var html = '<select class="select-dropdown" disabled>'
      + '<option>1</option>'
      + '<option>2</option>'
      + '<option>3</option>'
      + '</select>'
    var $selectDropdown = $(html)

    ok(!$selectDropdown.parent().html(), 'heyhey')
  })

})
