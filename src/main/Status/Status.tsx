import { Card, Image, Typography } from "antd";
import type { FC } from "react";

interface CertificateProps { }

const Certificate: FC<CertificateProps> = () => {





    return (<>


        <Card style={{}}>

            <Image

                style={{ transition: 'all 0.3s ease', marginTop: '30%' }}
                width={"100%"}
                src="https://img.sanishtech.com/u/d4739b731e91401442a9ca2a1ab1e079.jpg">

                    {/* <Typography>hai</Typography> */}
                </Image>
        </Card >


    </>);
}

export default Certificate;
