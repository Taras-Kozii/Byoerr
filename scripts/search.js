'use strict';

export function initSearch() {
const btn = document.querySelector('.search__button')
const input = document.querySelector('.search__input')
const label = document.querySelector('.search')

btn.addEventListener('click', () => {
  label.classList.add('open')
  input.focus()
})

input.addEventListener('blur', e => {
  label.classList.remove('open')
})
}