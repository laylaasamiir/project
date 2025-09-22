import React from 'react'
import { useRandomProducts } from './JS-Files/Hooks'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const randomProducts = useRandomProducts()
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category)
    navigate('/products')
  }

  return (
    <>
      {/* Section 1 */}
      <section className="py-5 container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img 
              src="https://plus.unsplash.com/premium_photo-1673977133409-b5c2ff90c9b6?q=80&w=2691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="shopping"
              className="img-fluid rounded shadow" 
              width={450} 
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: '#180e02ff', fontWeight:'bold'}}>Why Choose Us?</h3>
            <p className="textp fs-5" >
              We make your shopping experience easier by offering carefully selected products
              at fair prices and guaranteed quality. Our goal is to provide you with everything
              you need quickly and effortlessly, with trusted service that makes shopping more convenient
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="productCarousel" className="carousel slide container my-5" data-bs-ride="carousel">
        <h4 className="text-center mb-4 " style={{color:'#180e02ff',fontWeight:'bold'}}>What do we have?</h4>

        <div className="carousel-inner">
          {randomProducts.map((value, index) => (
            <div
              key={value.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="d-flex flex-column align-items-center">
                <Link to={'/Product/Details'} state={{ value }}>
                  <img
                    src={value.image}
                    className="d-block imgCarousel rounded shadow"
                    alt={value.title}
                  />
                </Link>
                <h5 className="mt-3 text-capitalize">{value.category}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Go Shopping Button */}
      <div className="text-center my-5">
        <Link to={'/Product'}>
          <button className="GoShopping px-4 py-2 fs-5 rounded-pill shadow">
            Go Shopping
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
