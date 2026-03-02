import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Card, Image, Typography, Upload } from "antd";
import type { FC } from "react";
import { useParams } from "react-router";
import React, { useRef } from "react";
import html2canvas from "html2canvas";


interface CertificateProps { }

const Certificate: FC<CertificateProps> = () => {


    const para = useParams()
    const captureRef = useRef(null);

    const handleDownload = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current, {
            scale: 2,          // High quality
            useCORS: true,
            allowTaint: true
        });

        const image = canvas.toDataURL("src\assets\Congratulations.jpg");

        const link = document.createElement("a");
        link.href = image;
        link.download = "certificate.png";
        link.click();
    };





    return (<>


        <Card >
            <div ref={captureRef}>

                {/* <Image

                    preview={{ open: false }}
                    style={{ transition: 'all 0.3s ease', marginTop: '90px', backgroundImage: 'initial', position: 'relative' }}
                    width={"100%"}
                    src="https://img.sanishtech.com/u/d4739b731e91401442a9ca2a1ab1e079.jpg">
                </Image> */}
                <img
                    width={"100%"}
                    style={{ transition: 'all 0.3s ease', marginTop: '90px', backgroundImage: 'initial', position: 'relative' }}
                    src="src\assets\Congratulations.jpg"
                    alt="image this"
                />
                <div style={{ position: 'absolute', top: '70%', left: '20%', }}>

                    <Typography style={{ fontFamily: 'custom-font', fontSize: "5vw" }}>
                        {para?.userName} </Typography>
                </div>
            </div>

            <Button style={{ marginTop: '10px' }} onClick={handleDownload} type="primary" icon={<DownloadOutlined />} size="medium">
                Download
            </Button>
        </Card >

    </>);
}

export default Certificate;

