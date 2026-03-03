import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Card, Image, Typography, Upload } from "antd";
import type { FC } from "react";
import { useParams } from "react-router";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { titleCase } from "text-case";
import { motion } from "framer-motion";
import { Button, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

interface CertificateProps { }

const Certificate: FC<CertificateProps> = () => {
    const [imageUrl, setImageUrl] = useState<any>()
    console.log("imageUrl", imageUrl);

    const para = useParams()
    const captureRef = useRef(null);

    const handleDownload = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current, {
            scale: 2,          // High quality
            useCORS: true,
            allowTaint: true
        });

        const image = canvas.toDataURL("https://res.cloudinary.com/dmlhzurnk/image/upload/v1772476002/Congratulations_rpp8aw.png");

        const link = document.createElement("a");
        link.href = image;
        link.download = "certificate.png";
        link.click();
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });



    return (<>


        <div className="min-h-screen flex flex-col items-start justify-center bg-gray-100 p-4 pt-[135px]">
            <div ref={captureRef}
                className="relative inset-0 w-full max-w-[794px] aspect-[210/297] rounded-2xl overflow-hidden shadow-2xl bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dmlhzurnk/image/upload/v1772476002/Congratulations_rpp8aw.png')" }}
            >

                <div className="absolute inset-0">
                    {/* Profile Image */}
                    {imageUrl && <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        src={imageUrl ? imageUrl : "https://randomuser.me/api/portraits/men/75.jpg"}
                        alt="Profile"
                        className="absolute left-[16%] top-[55%] w-[26%] aspect-square  border-4 border-white shadow-xl object-cover"
                    />}

                    {/* Name Text */}
                    <h1 className="absolute top-[78%] left-1/2 -translate-x-1/2 text-[3vw] font-bold text-mauve-800" style={{ fontFamily: 'custom-font', fontSize: "5vw" }}>
                        {titleCase(para?.userName || "")}
                    </h1>
                </div>

            </div>

            {/* Upload Button */}
            <div className="w-full max-w-[794px] gap-3 mt-6 flex justify-center">
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<UploadOutlined />}
                >
                    Upload image
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => {
                            const file = event.target.files?.[0]
                            if (file) {
                                const url = URL.createObjectURL(file)
                                setImageUrl(url)
                            }
                        }}
                        multiple
                    />
                </Button>
                <Button onClick={handleDownload} variant="contained" endIcon={<DownloadOutlined />}>
                    Download
                </Button>
            </div>
        </div>



















        {/* <Card >
            <div ref={captureRef}>

               
                <img
                    width={"100%"}
                    style={{ transition: 'all 0.3s ease', marginTop: '90px', backgroundImage: 'initial', position: 'relative' }}
                    src="https://res.cloudinary.com/dmlhzurnk/image/upload/v1772476002/Congratulations_rpp8aw.png"
                    alt="image this"
                />
                <div style={{ position: 'absolute', top: '70%', left: '20%', }}>

                    <Typography style={{ fontFamily: 'custom-font', fontSize: "7vw" }}>
                        {titleCase(para?.userName || "")} </Typography>
                </div>
            </div>

            <Button style={{ marginTop: '10px' }} onClick={handleDownload} type="primary" icon={<DownloadOutlined />} size="medium">
                Download
            </Button>
        </Card > */}

    </>);
}

export default Certificate;

{/* <Image

                    preview={{ open: false }}
                    style={{ transition: 'all 0.3s ease', marginTop: '90px', backgroundImage: 'initial', position: 'relative' }}
                    width={"100%"}
                    src="https://img.sanishtech.com/u/d4739b731e91401442a9ca2a1ab1e079.jpg">
                </Image> */}