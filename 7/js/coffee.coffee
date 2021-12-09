validateTest = (tag) ->
  words = wordCounter(tag.value)
  if tag.value == '' or words < 30
    tag.setCustomValidity 'Недостаточно слов'
  else
    tag.setCustomValidity ''
  return

startCalendar = ->
  `var i`
  `var i`
  `var option`
  calendarDays = document.getElementsByClassName('calendar__element')
  i = 0
  while i < calendarDays.length
    calendarDays[i].addEventListener 'click', ->
      j = 0
      while j < calendarDays.length
        calendarDays[j].classList.remove 'chosen'
        j++
      calendarDays[i].classList.add 'chosen'
      return
    i++
  calendarMonths = document.getElementById('calendar__month')
  i = 0
  while i < months.length
    option = document.createElement('option')
    option.value = months[i]
    option.textContent = months[i]
    calendarMonths.appendChild option
    i++
  calendarYears = document.getElementById('calendar__year')
  i = 2021
  while i > 1970
    option = document.createElement('option')
    option.value = i
    option.textContent = i
    calendarYears.appendChild option
    i--
  return

showHobbies = ->
  args = [
    {
      title: 'ASD'
      content: 'test'
    }
    {
      title: 'Hobby2'
      content: 'test2'
    }
    {
      title: 'Hoob1'
      content: 'testtestesr'
    }
  ]
  parent = document.getElementsByClassName('content__body')[0]
  i = 0
  while i < args.length
    hobbyCntainer = document.createElement('div')
    hobbyCntainer.className = 'content__body'
    header = document.createElement('h3')
    header.textContent = args[i]['title']
    header.className = 'content__header'
    content = document.createElement('article')
    content.textContent = args[i]['content']
    hobbyCntainer.appendChild header
    hobbyCntainer.appendChild content
    parent.append hobbyCntainer
    i++
  return

showImages = ->
  i = 0
  while i < photos.length
    div = document.createElement('div')
    div.className = 'col'
    image = document.createElement('img')
    image.src = photos[i]
    image.className = 'content__image'
    image.setAttribute 'dataenlargeable', null
    imageName = document.createElement('p')
    imageName.textContent = titles[i] + ' ' + (i + 1).toString()
    document.getElementsByClassName('image-gallery')[0].appendChild(div).append image, imageName
    i++
  return

openImage = ->
  img__content = document.querySelectorAll('.content__image')
  img__open = document.querySelector('.big-image')
  img__background = document.querySelector('.image-background')
  i = 0
  while i < img__content.length
    img__content[i].addEventListener 'click', ->
      img__open.style.display = 'block'
      img__background.style.display = 'block'
      img__open.innerHTML = ''
      context = '<img title ="Photo# ' + i + '" src="img/1.jpg"}">'
      img__open.insertAdjacentHTML 'beforeend', context
      return
    i++
  img__background.addEventListener 'click', ->
    img__open.style.display = 'none'
    img__background.style.display = 'none'
    return
  return