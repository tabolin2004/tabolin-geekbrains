class List {
  _items = []
  
  constructor (CartInstance) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, CartInstance)
    })
    this._items = goods
    this.render()
  }

  fetchGoods () {
    return [
      { name: 'Shirt', price: 150, img: './images/item1.jpg' },
      { name: 'Socks', price: 250, img: './images/item2.jpg' },
      { name: 'Jacket', price: 750, img: './images/item3.jpg' },
      { name: 'Shirt', price: 150, img: './images/item4.jpg' },
      { name: 'Socks', price: 250, img: './images/item5.jpg' },
      { name: 'Jacket', price: 750, img: './images/item6.jpg' },
      { name: 'Shirt', price: 150, img: './images/item7.jpg' },
      { name: 'Socks', price: 250, img: './images/item8.jpg' },
      { name: 'Jacket', price: 750, img: './images/item9.jpg' },
      { name: 'Shirt', price: 150, img: './images/item10.jpg' },
      { name: 'Socks', price: 250, img: './images/item11.jpg' },
      { name: 'Jacket', price: 750, img: './images/item12.jpg' },
    ]
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


      block.style.fontSize = "15px";
      block.style.border = "1px solid lightgrey";
      block.style.borderRadius = "8px";
      block.style.margin = "12px";
      block.style.boxShadow = '6px 4px 15px rgba(0, 0, 0, 0.21)';
      block.style.paddingBottom = "8px";
          
      placeToRender.style.display = "flex";
      placeToRender.style.margin = "34px";
      placeToRender.style.flexWrap = "wrap";
      placeToRender.style.justifyContent = "center";
    
    }
  }
}



class Cart {
  
  _items = []


  add (data) {  
    this._items = [] 
    this._items.push(data)
    let goods = this._items
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

      block.style.fontSize = "15px";
      block.style.border = "1px solid lightgrey";
      block.style.borderRadius = "8px";
      block.style.margin = "12px";
      block.style.boxShadow = '6px 4px 15px rgba(0, 0, 0, 0.21)';
      block.style.paddingBottom = "8px";
      block.style.backgroundColor = "white";
          
      placeToRender.style.display = "flex";
      placeToRender.style.margin = "32px";
      placeToRender.style.flexWrap = "wrap";
      placeToRender.style.justifyContent = "center";
      placeToRender.style.backgroundColor = "lightyellow";
    
    }
  }
}


 const CartInstance = new Cart() 
 new List(CartInstance)




 





