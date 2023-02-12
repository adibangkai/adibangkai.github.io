const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const body = document.querySelector('body')
const content = document.querySelector('#content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
    tab.classList.add('active')

    tabContents.forEach(tabContent => {
    setTimeout(function(){
      tabContent.classList.add('hide')
      }
      , 300)
    })
    content.classList.remove('inner')
    content.classList.add('rapet')
    content.classList.add('doner')

    setTimeout(function(){
      target.classList.remove('hide')
      content.classList.remove('rapet')
      }
      , 300)


  })
})