class DelButton {
	_text = ''

  
	constructor (text) {
	  this._text = text
    }    
  
	getTemplate () {
	  const delButton = document.createElement('button')
	  delButton.classList.add('delButton')
  
	  return delButton
	}
  
	renderButton (placeToRender) {
	  if (placeToRender) {
		const delButton = this.getTemplate()
		delButton.innerHTML = this._text
		placeToRender.appendChild(delButton)
  
		delButton.addEventListener('click', (event) => {
            event.target.parentNode.remove();    
		})
	  }
	}
}
  