import type { FC } from 'react';

// import SliderImages from '../Slider/Sliderimages';
import StudentServices from '../Student Services/Student Services';
// import ImageCarocel from '../Slider/imageSlide';
import SliderImages from '../Slider/Sliderimages';


interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (<>


        {/* <SliderImages /> */}
        <SliderImages />
        <StudentServices />


    </>);
}

export default Home;
