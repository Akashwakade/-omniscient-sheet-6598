import React, { useState,useEffect } from 'react';
// import "./css/ImagSlider.module.css"
import "./css/ImageSlider.css"

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_270323_Bangalore.jpg',
      
    },
    {
      id: 2,
      imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg',
      
    },
    {
        id: 1,
        imageUrl: 'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_270323_Bangalore.jpg',
       
      },
   
  ];

  const nextSlide = () => {
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevIndex);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="image-slider">
      <div className="image-slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.imageUrl} alt={slide.caption} />
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex', width:"100px", margin:"auto" ,justifyContent:"space-between"}}>
      <button className="prev-button" onClick={prevSlide}>Prev</button>
      
      <button className="next-button" onClick={nextSlide}>Next</button></div>
    </div>
  );
}

export default ImageSlider;
