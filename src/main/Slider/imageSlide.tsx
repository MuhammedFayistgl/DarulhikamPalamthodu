import { Swiper, SwiperSlide } from 'swiper/react';





const ImageCarousel = () => {

  return(<>
    <Swiper style={{}}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{width:600,height:300}} >Slide 1</SwiperSlide>
      <SwiperSlide style={{width:600,height:300}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{width:600,height:300}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{width:600,height:300}} >Slide 4</SwiperSlide>
      <SwiperSlide  style={{width:600,height:300}}>Slide 4</SwiperSlide>
      <SwiperSlide  style={{width:600,height:300}}>Slide 4</SwiperSlide>
      ...
    </Swiper>
    
    </>)
}
export default ImageCarousel











// function ImageCarocel() {
//   const settings = {
    
//     className: "",
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true
    
//   };

//   return (
//     <div className="slider-container" style={{width:"100%" ,height:500 ,background:"green"}}>
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//           <p>Hello</p>
//         </div>
//         <div>
//           <h3>3</h3>
//           <p>See ....</p>
//           <p>Height is adaptive</p>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default ImageCarocel
// // import type { FC } from 'react';
// import { Carousel } from 'antd';

// interface ImageCarocelProps { }

// const ImageCarocel: FC<ImageCarocelProps> = () => {


//     const contentStyle: React.CSSProperties = {
//         marginTop: 100,
//         maxHeight: 400,
//         color: '#fff',
//         lineHeight: '160px',
//         textAlign: 'center',
//         background: '#364d79',
//     };

//     const onChange = (currentSlide: number) => {
//         console.log(currentSlide);
//     };
//     return (<>


//         <Carousel afterChange={onChange}>
//               <Carousel afterChange={onChange}>
//       <div>
//         <img
//         draggable={true}
//         alt="example"
//         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//       />
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
           
               
//         </Carousel>


//     </>);
// }

// export default ImageCarocel;



// const images = [
//     { url: "https://ibb.co/TDz1Q1sv" },
//     { url: "https://ibb.co/YBMmfpNr" },
//     { url: "https://ibb.co/fzKSNGbQ" },
//     { url: "https://ibb.co/4nPZsdpm" },
//     { url: "https://ibb.co/PnTwV2b" },
//     { url: "https://ibb.co/5hRZyQKD" },
//     { url: "https://ibb.co/GQqKmnhy" },
// ];