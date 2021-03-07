class List {
  _items = []

  constructor (CartInstance) {
    this.fetchGoods()
    .then(res => {
      return res.json()
    })
    .then(res => {
      this._items = res.data.map(item => {
        return new GoodItem(item, CartInstance)
      })
    })        
    .then(this.render.bind(this))
  }    

  fetchGoods () { 
    return fetch('http://localhost:3000/data.json')
  }  

  render () {
    this._items.forEach(Good => {
      Good.renderItem()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _CartInstance = null


  constructor ({ name, price, img }, CartInstance) {
    this._name = name
    this._price = price
    this._img = img
    this._CartInstance = CartInstance
  }

  addToCart () {
    this._CartInstance.add(this)
  }


  renderItem () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
      <img src="${this._img}" /> <br>
      Товар: ${this._name} <br> Цена: ${this._price} руб.   
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.renderButton(block)

      placeToRender.appendChild(block)

      block.classList.add('itemCard')
      placeToRender.classList.add('placeToRender')


    
    }
  }
}



class Cart {
  
  _items = []

  add (data) {  

    let goods = []
    goods.push(data)
    goods = goods.map ( item => {
    return new CartItem ( item )
    })
    this._items = goods
    this.render() 
  }

  render () {
    this._items.forEach(Good => {
      Good.renderCart()
    })
  }
}  


class CartItem {
  __name = ''
  __price = 0
  __img = 0



  constructor ( {_name, _price, _img} ) {
    this.__name = _name
    this.__price = _price
    this.__img = _img
  }


  renderCart () {
    const placeToRender = document.querySelector('.cart-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
      <img src="${this.__img}" /> <br>
      Товар: ${this.__name} <br> Цена: ${this.__price} руб.   
      `
     // const btn = new Button('Удалить из корзины', this.removeFromCart.bind(this))

      const delbtn = new DelButton('Удалить из корзины');
      delbtn.renderButton(block)
      
      placeToRender.appendChild(block)

      block.classList.add('cartItemCard')
      placeToRender.classList.add('cartPlaceToRender')
   
    }
  }
}


 const CartInstance = new Cart() 
 new List(CartInstance)




 





