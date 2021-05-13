const labelText = document.querySelectorAll('label');

labelText.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 30}ms">${letter}</span>`
    )
    .join('');
});
