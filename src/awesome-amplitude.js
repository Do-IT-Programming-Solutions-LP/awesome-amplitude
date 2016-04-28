module.exports = (function () {
  'use strict'
  
  let service = {}
  let dataAttribute =''

  service.init = function (APIkey, dataAttr = 'data-analytics-event') {
    amplitude.init(APIkey)
    dataAttribute = dataAttr
  }

  service.parse = function () {
    let elemsToObserve = document.querySelectorAll(`[${dataAttribute}]`)
    ;[].forEach.call(elemsToObserve, (elem) => {
      elem.addEventListener('click', (e) => {
        let event = e.srcElement.getAttribute(dataAttribute)
        amplitude.logEvent(event)
      })
    })
  }

  service.log = function (event) {
    amplitude.logEvent(event)
  }

  return service
})()
