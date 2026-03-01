import { Typography } from '@mui/material';
import type { FC } from 'react';
import { FontColor } from '../../CONTENT/Constent';
import CardCustom from './Card';

interface StudentServicesProps { }

const StudentServices: FC<StudentServicesProps> = () => {

    return (<>
        <Typography align="center" marginTop={5} fontFamily="Lexend , sans-serif " style={{ fontWeight: 700, fontSize: 28, color: `${FontColor}` }}  >
            Student Services
        </Typography>
        <Typography fontFamily={"math"} variant="h6" align="center" marginTop={2} color={FontColor}>
            Access your academic information and student dashboard
        </Typography>
        {/* Cards */}
        <CardCustom />

    </>
    );
}

export default StudentServices;
