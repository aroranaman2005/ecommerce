import React from 'react'

function CartContents() {
  const cartItems = [
    {
      name: "T-Shirt",
      price: 500,
      index: 1,
      size: "XL",
      color: "Black",
      quantity: 2,
      url: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-14at12.33.18PM_cb1370a5-db13-4212-b840-cc2377484f2a.jpg?v=1744009322"
    },
    {
      name: "Jeans",
      price: 1000,
      index: 2,
      size: "L",
      color: "Blue",
      quantity: 1,
      url: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-05-14at12.33.18PM_cb1370a5-db13-4212-b840-cc2377484f2a.jpg?v=1744009322"
    },
    {
      name: "Sneakers",
      price: 2000,
      index: 3,
      size: "10",
      color: "White",
      quantity: 1,
      url: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1720112355_6238943.jpg?format=webp&w=300&dpr=1.0"
    }
  ]
  return (
    <div>
      {
        cartItems.map( (cartItem, index) => (
          <div key={index} className='flex m-2 space-x-2' >

            {/* left half */}
            <div>
              <img src={cartItem.url} className='h-30 w-30 rounded-md' alt="" />
            </div>

            {/* right half */}
            <div>
              <p className='text-md'>{cartItem.name}</p>
              <p className='text-sm'>Size: {cartItem.size} | Color: {cartItem.color}</p>

              <div>
                <button className='flex'>-</button>
                <p>{cartItem.quantity}</p>
                <button className=''>+</button>
              </div>
              
            </div>
          </div>
      ) )
      }
      
    </div>
  )
}

export default CartContents
