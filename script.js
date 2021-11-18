const $Container = document.querySelector(".Container");
const $Container2 = document.querySelector(".Container2");
const $Hbtn = document.getElementById("Homebtn");
const $form_page = document.querySelector(".form");
const $btns = document.getElementById("btns");
const $fhead = document.querySelector('.formheading')
const $form = document.querySelector('.form')
const $story = document.querySelector('.story')
const $reset = document.querySelector('.btnreset')

$Container.addEventListener('click', function (event) {
  if (event.target.classList.contains('Homebtn')) {
    $reset.classList.remove('hidden');
  }
  if (event.target.innerHTML == 'Mission Statement') {
    $Container.classList.add('hidden');
    show(0);
  } else if (event.target.innerHTML == 'Lunch Room!') {
    $Container.classList.add('hidden');
    show(1);
  } else if (event.target.innerHTML == 'Weather Report') {
    $Container.classList.add('hidden');
    show(2);
  }
});

function show(story) {
  $fhead.innerHTML = `<h2>${stories[story].title}</h2>`;
  for (let i = 0; i < stories[story].words.length; i++) {
    $form.innerHTML += `<input type='text' placeholder='${stories[story].words[i]}' name='${stories[story].words[i]}' required>`;
  }
  $form.innerHTML += '<input type="submit" value="Read Story" class="btn formSubmit">';
}

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  $form.classList.add('hidden');

  const elements = $form.elements;
  const wordArray = [];
  for (const element of elements) {
    wordArray[`${element.name}`] = element.value;
  }

  if ($fhead.innerHTML == `<h2>${stories[0].title}</h2>`) {
    $story.innerHTML = stories[0].output(wordArray);
  } else if ($fhead.innerHTML == `<h2>${stories[1].title}</h2>`) {
    $story.innerHTML = stories[1].output(wordArray);
  } else if ($fhead.innerHTML == `<h2>${stories[2].title}</h2>`) {
    $story.innerHTML = stories[2].output(wordArray);
  }
});

$reset.addEventListener('click', function (e) {
  if ($Container.classList.contains('hidden')) {
    $Container.classList.remove('hidden');
  }
  if ($Container2.classList.contains('hidden')) {
    $Container2.classList.remove('hidden');
  }
  $fhead.innerHTML = '';
  $form.innerHTML = '';
  $story.innerHTML = '';
  if ($form.classList.contains('hidden')) {
    $form.classList.remove('hidden');
  }
  $reset.classList.add('hidden');
});