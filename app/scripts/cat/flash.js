(function( $ ) {'use strict';
  $(document).on('click', '.js-close', function() {
    $(this).parent().remove();
  });
})(jQuery);
