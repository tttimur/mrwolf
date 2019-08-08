;(function (w, $, undefined) {
  "use strict";

  w.ajaxRouter = function (event, url) {
    if (event.ctrlKey)
      return true; // CTRL+CLICK opens link in new tab -> no ajax, default behaviour
    else {
      var url = url || $(this).attr('href'),
        matches = /^http[s]?\:\/\/([^/]+)/.exec(url);

      if (Object.prototype.toString.call(matches) === '[object Array]'
        && matches.length >= 1
        && matches[1] !== window.location.hostname) {
        return true; // Full url to a different domain -> no ajax, default behaviour
      }
      else if ($(this).attr('rel') === 'static')
        return true;
      else {
        $.ajax({
          url: url,
          beforeSend: function () {
            $.blockUI({
              css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
              }
            });
          },
          success: function (data) {
            $.unblockUI();
            $('#body').find('#main').remove();
            $('#body').append(data);
            $("html, body").animate({ scrollTop: 0 }, 'slow');

            if (window.History.pushState)
              window.History.pushState({}, document.title, url);
            else
              window.location.hash = url;

            // w._INIT();
          },
          error: function (request, status, error) {
            $.blockUI({
              message: '<h1>Unexpected error. Please try again later.</h1>',
              css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
              }
            });

            setTimeout(function () {
              $.unblockUI();
            }, w.ajaxErrorTimeout);
          }
        });

        return false; // Relative url or full url to the same domain -> ajax, custom behaviour
      }
    }
  };

  window.History.Adapter.bind(window, 'statechange', function () {
    var state = window.History.getState();
    var offset = state.cleanUrl.indexOf('/', state.cleanUrl.indexOf('://') + 3);
    w.ajaxRouter({}, state.cleanUrl.substr(offset));
  });

  $('a').click(w.ajaxRouter);
}(window, jQuery));