function isSubscribed() {
  const buttonElement = document.querySelector('.js-subscribed-button');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Unsubscribe';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}
