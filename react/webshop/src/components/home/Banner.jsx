import React from 'react'

const Banner = (information) => {

  return (
    <div className="banner header-text">
      <div className="">
        <div className="banner-item-01">
          <div className="text-content">
            <h4>{information.bannertitle}</h4>
            <h2>{information.bannertext}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner