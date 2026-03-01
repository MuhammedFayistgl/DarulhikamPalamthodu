import type { FC } from 'react';

import SliderImages from '../Slider/Sliderimages';
import StudentServices from '../Student Services/Student Services';


interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (<>


        <SliderImages />
        <StudentServices />


    </>);
}

export default Home;
