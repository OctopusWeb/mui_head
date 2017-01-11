;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="if-zhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.136 960.238c-247.782 0-449.401-200.93-449.401-447.901 0-246.937 201.619-447.866 449.401-447.866 247.852 0 449.436 200.927 449.436 447.866C960.572 759.308 758.988 960.238 511.136 960.238zM511.136 117.797c-218.257 0-395.857 177.03-395.857 394.539 0 217.542 177.6 394.531 395.857 394.531 218.287 0 395.892-176.99 395.892-394.531C907.028 294.827 729.423 117.797 511.136 117.797zM524.039 552.414c-22.782 6.105-46.275-7.4-52.367-30.14-6.085-22.71 7.507-46.152 30.29-52.257 22.817-6.115 46.302 7.395 52.387 30.1C560.438 522.859 546.854 546.299 524.039 552.414zM504.761 236.079c-11.882 0-21.497-9.582-21.497-21.387l0-46.69c0-11.842 9.615-21.425 21.497-21.425l16.817 0c11.85 0 21.5 9.582 21.5 21.425l0 46.69c0 11.805-9.65 21.387-21.5 21.387L504.761 236.079zM578.808 484.221c1.625 0.938 3.115 2.092 4.475 3.415 4.015 4.057 6.28 9.507 6.285 15.19l0.015 16.747c0.03 11.825-9.57 21.41-21.47 21.42l-228.247-0.34c-3.9-0.015-7.577-1.06-10.725-2.875-6.425-3.71-10.772-10.66-10.757-18.605l-0.047-16.767c-0.005-5.68 2.23-11.142 6.257-15.16 4.022-4.017 9.475-6.257 15.162-6.247l228.327 0.34c3.79-0.005 7.485 1.008 10.73 2.882L578.808 484.221zM809.838 542.119c-11.85 0-21.5-9.54-21.5-21.42l0-16.69c0-11.842 9.65-21.46 21.5-21.46l46.845 0c11.885 0 21.535 9.615 21.535 21.46l0 16.69c0 11.875-9.65 21.42-21.535 21.42L809.838 542.119zM503.571 879.168c-11.847 0-21.497-9.62-21.497-21.425l0-46.655c0-11.84 9.65-21.46 21.497-21.46l16.782 0c11.88 0 21.495 9.62 21.495 21.46l0 46.655c0 11.805-9.61 21.425-21.495 21.425L503.571 879.168zM165.624 544.129c-11.885 0-21.5-9.545-21.5-21.42l0-16.69c0-11.845 9.615-21.46 21.5-21.46l46.847 0c11.882 0 21.497 9.615 21.497 21.46l0 16.69c0 11.875-9.615 21.42-21.497 21.42L165.624 544.129zM499.061 591.318c-1.622-0.93-3.117-2.09-4.478-3.41-4.047-3.995-6.295-9.48-6.3-15.16l-0.432-270.757c0.015-11.842 9.592-21.442 21.47-21.417l16.792 0.003c3.775 0.02 7.485 1.008 10.73 2.878 1.625 0.935 3.12 2.09 4.455 3.442 4.04 4.03 6.295 9.477 6.315 15.207l0.425 270.714c-0.02 11.84-9.595 21.435-21.455 21.385l-16.797 0C506.001 594.214 502.301 593.193 499.061 591.318L499.061 591.318z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="if-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="if-zuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)