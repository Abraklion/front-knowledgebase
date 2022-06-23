
// добавление кнопки для копирования кода
function copyCode(selector) {

  const codeBlock = document.querySelectorAll(selector);

  // ответ пользователю
  const answer = (parentBlock,text) => {

    let divNode = document.createElement('div')
    divNode.classList.add('custom-copy-answer')
    divNode.innerText = text

    parentBlock.append(divNode)

    setTimeout(() => {
      divNode.remove()
    }, 500)
  }

  // копирует текст при нажатии на кнопку
  const clickBtn = (node) => {

    node.addEventListener('click', (e) => {

      e.preventDefault();

      navigator.clipboard.writeText(node.previousElementSibling.innerText)
        .then(() => {

          /* успех */
          answer(node.parentNode,'Скопирован')

        })
        .catch(err => {

          /* ошибка */
          answer(node.parentNode,'Ошибка')

          console.warn(`Ошибка: ${err.message}`)

        });

    });

  }

  // добавляет кнопку
  const addButtons = () => {

    codeBlock.forEach(code => {

      let btn = document.createElement('button')
      btn.classList.add('custom-copy-btn')
      btn.setAttribute('title', 'Скопировать')

      code.style.position = 'relative'

      code.append(btn)

      clickBtn(btn)

    })

  }

  addButtons();

}

copyCode('pre')

