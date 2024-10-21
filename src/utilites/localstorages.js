const getStoredCard =()=>{
  const storedCardString =  localStorage.getItem('cart')
  if (storedCardString) {
    return JSON.parse(storedCardString)
  }
  return []
}
const saveCardToLs = cart =>{
    const CardStringified=JSON.stringify(cart);
    localStorage.setItem('cart', CardStringified)
}

const addToLs = Id =>{
    const cart = getStoredCard();
    cart.push(Id)
    saveCardToLs()
}
export{addToLs}