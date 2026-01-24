import React from 'react'

const Product = () => {


 var data = [
  {
   title : "Camra",
   dis:"CAMRA is considered one of the most successful consumer organisations across Europe. Founded by four real ale enthusiasts back in 1971, today we represent ",
   price:200,
   image:"https://img.drz.lazcdn.com/g/kf/S1f9fe7188e8848e9acc390ca47012f082.jpg_720x720q80.jpg",
   review:"5 star"
  },
  {
   title : "Camra",
   dis:"CAMRA is considered one of the most successful consumer organisations across Europe. Founded by four real ale enthusiasts back in 1971, today we represent ",
   price:200,
   image:"https://img.drz.lazcdn.com/g/kf/S1f9fe7188e8848e9acc390ca47012f082.jpg_720x720q80.jpg",
   review:"5 star"
  },
  {
   title : "Laptop",
   dis:"Laptop Price in Pakistan in 2026 starts from Rs. 100,000. Paklap offers same-day cash-on-delivery services in Lahore, Karachi & Islamabad.",
   price:300,
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
   review:"4 star"
  },
  {
   title : "Mobile",
   dis:"Latest Mobile Phone & Prices in Pakistan · Realme C85. Rs. 54,999 PKR · Oppo A6x. Rs. 46,999 PKR · Infinix GT 30 Pro. Rs. 129,999 PKR · Realme C85 Pro. Rs.",
   price:300,
   image:"https://cellmart.pk/wp-content/uploads/2025/10/vivo-y21d-purple-cellmart-350x350.png",
   review:"4 star"
  },
  {
   title : "Camra",
   dis:"CAMRA is considered one of the most successful consumer organisations across Europe. Founded by four real ale enthusiasts back in 1971, today we represent ",
   price:200,
   image:"https://img.drz.lazcdn.com/g/kf/S1f9fe7188e8848e9acc390ca47012f082.jpg_720x720q80.jpg",
   review:"5 star"
  },
  {
   title : "Laptop",
   dis:"Laptop Price in Pakistan in 2026 starts from Rs. 100,000. Paklap offers same-day cash-on-delivery services in Lahore, Karachi & Islamabad.",
   price:300,
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
   review:"4 star"
  },
  {
   title : "Mobile",
   dis:"Latest Mobile Phone & Prices in Pakistan · Realme C85. Rs. 54,999 PKR · Oppo A6x. Rs. 46,999 PKR · Infinix GT 30 Pro. Rs. 129,999 PKR · Realme C85 Pro. Rs.",
   price:300,
   image:"https://cellmart.pk/wp-content/uploads/2025/10/vivo-y21d-purple-cellmart-350x350.png",
   review:"4 star"
  },
  {
   title : "Laptop",
   dis:"Laptop Price in Pakistan in 2026 starts from Rs. 100,000. Paklap offers same-day cash-on-delivery services in Lahore, Karachi & Islamabad.",
   price:300,
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
   review:"4 star"
  },
  {
   title : "Mobile",
   dis:"Latest Mobile Phone & Prices in Pakistan · Realme C85. Rs. 54,999 PKR · Oppo A6x. Rs. 46,999 PKR · Infinix GT 30 Pro. Rs. 129,999 PKR · Realme C85 Pro. Rs.",
   price:300,
   image:"https://cellmart.pk/wp-content/uploads/2025/10/vivo-y21d-purple-cellmart-350x350.png",
   review:"4 star"
  }
 ];


  return (
    <div className='bg-light'>
     <div className='container py-5 '>
       <div className='row'>
         {
          data.map((p,i)=>(
           <div className='col-lg-4 col-md-6 col-sm-12 mb-3' key={i}>
            <div className='card'>
              <img src={p.image} className='w-100' />
              <div className='card-body'>
                <h3>{p.title}</h3>
                <p>
                 {p.dis}
                </p>
                <p>Price : <span className='text-info'>{p.price}</span></p>
                <p>REview : <span className='text-info'>{p.review}</span></p>
                <button className='btn btn-info'>Read More</button>
              </div>
            </div>
          </div>
          ))
         }
       </div>
     </div>
    </div>
  )
}

export default Product