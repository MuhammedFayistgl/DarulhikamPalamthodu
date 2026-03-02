import { Button, Typography } from '@mui/material';
import type { FC } from 'react';
// import ContentPasteGoSharpIcon from '@mui/icons-material/ContentPasteGoSharp';
import { FontColor, FontColorGreen, FontColororange } from '../../CONTENT/Constent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Card, Flex } from 'antd';

interface CardCustomProps { }

const CardCustom: FC<CardCustomProps> = () => {
    const dataCard = [{
        heding: "Quick Result Check",
        description: "Choose your class and check your result instantly",
        icon: <MilitaryTechIcon sx={{ fontSize: 45 }} />,
        bgColor: true,
        link: "/Result",
        buttonText: "Check Now"
    },
    //  {
    //     heding: "Student Portal",
    //     description: "Complete dashboard with results, attendance, and performance analytics",
    //     icon: <PermIdentityIcon sx={{ fontSize: 45 }} />,
    //     bgColor: true,
    //     link: "/",
    //     buttonText: "Login Now"
    // }, {
    //     heding: "Academic Excellence",
    //     description: "Quality education with comprehensive curriculum",
    //     icon: <SchoolIcon sx={{ fontSize: 45, color: FontColor }} />,
    //     bgColor: false,
    //     link: "/",
    //     buttonText: "Check Now"
    // }, {
    //     heding: "Expert Faculty",
    //     description: "Experienced and dedicated teaching staff",
    //     icon: <PeopleIcon sx={{ fontSize: 45 }} />,
    //     bgColor: false,
    //     link: "/",
    //     buttonText: "Check Now"
    // }, {
    //     heding: "Achievement Track",
    //     description: "Proven track record of student success",
    //     icon: <EmojiEventsIcon sx={{ fontSize: 45, color: FontColororange }} />,
    //     bgColor: false,
    //     link: "/",
    //     buttonText: "Check Now"
    // }, {
    //     heding: "Digital Learning",
    //     description: "Modern technology-enabled education",
    //     icon: <LocalLibraryIcon sx={{ fontSize: 45, color: FontColor }} />,
    //     bgColor: false,
    //     link: "/",
    //     buttonText: "Check Now"
    // },

];
    return (

        <>
            {/* {dataCard.map((card, index) => {
                return (


                    <div id={`card-${index}`} style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: 25 }} key={index}>

                        <Box
                            sx={{
                                // margin: 5,
                                // width: 400,
                                // height: 300,
                                borderRadius: "10px",
                                backgroundColor: '#ffffff',
                                boxShadow: ' 10px 10px 20px #fafafa  , -10px -10px 20px #eeeded',

                                '&:hover': {
                                    boxShadow: ' 10px 10px 20px #e6e2e2  , -10px -10px 20px #e4e3e3',
                                    // width: 410,
                                    // height: 310,
                                },

                            }}


                        >
                            <div style={{ display: "flex", flexDirection: "column", width: 400, height: 300, justifyContent: "center", alignItems: "center", color: FontColorGreen }}>
                                <div style={{ background: card.bgColor ? 'rgb(203, 253, 214)' : 'transparent', padding: '10px', borderRadius: '10px' }} >
                                    {card.icon}


                                </div>
                                <Typography sx={{ marginTop: 2, color: FontColor }} variant="h5" fontWeight={700} marginLeft={2} >{card.heding}</Typography>
                                <Typography fontWeight={300} sx={{ width: "80%", textAlign: "center", marginTop: 2 }} color={FontColor}  >{card.description}</Typography>
                                <Button endIcon={<ArrowForwardIcon />} color={"success"} sx={{ marginTop: 2 }} >
                                    <NavLink style={{ marginTop: 2, color: FontColorGreen, textDecoration: "none" }} to={card.link}>   {card.buttonText}</NavLink>

                                </Button>
                            </div>

                        </Box>

                    </div>


                )
            })} */}

            <Flex wrap="wrap" justify="center" gap={4} style={{ marginTop: 0 }}>
                {dataCard.map((card, index) => {
                    return (<>

                        <Card hoverable id={`card-${index}`} className="card-custom" style={{
                            maxWidth: 400, maxHeight: 300,  marginTop: 20,
                            // minHeight:20,minWidth:100,
                            paddingBottom: 0, alignContent: "center",
                            boxShadow: ' 10px 10px 20px #fafafa  , -10px -10px 20px #eeeded',
                            // "&:hover": {
                            //     boxShadow: ' 10px 10px 20px #e6e2e2  , -10px -10px 20px #e4e3e3',
                            // },
                        }}>
                            {/* <div style={{ background: card.bgColor ? 'rgb(203, 253, 214)' : 'transparent', padding: '10px', borderRadius: '10px' }} >
                                {card.icon}


                            </div> */}
                            <div style={{ display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center", color: FontColorGreen }}>

                                <div style={{ padding:15,borderRadius:10, textAlign: "center", background: card.bgColor ? 'rgb(203, 253, 214)' : 'transparent', border: 'none', color: FontColorGreen ,}}> {card.icon}</div>
                                <Typography sx={{ marginTop: 2, color: FontColor }} variant="h5" fontWeight={700} marginLeft={2} >{card.heding}</Typography>
                                <Typography fontWeight={300} sx={{ width: "80%", textAlign: "center", marginTop: 2 }} color={FontColor}  >{card.description}</Typography>
                                <Button endIcon={<ArrowForwardIcon />} color={"success"} sx={{ marginTop: 2 }} >
                                    <NavLink style={{ marginTop: 2, color: FontColorGreen, textDecoration: "none" }} to={card.link}>   {card.buttonText}</NavLink>

                                </Button>
                            </div>
                        </Card>


                    </>)
                })}





            </Flex>


        </>);
}

export default CardCustom;
