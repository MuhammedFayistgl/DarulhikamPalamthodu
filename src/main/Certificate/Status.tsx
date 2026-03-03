import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";

import type { FC } from "react";
import { useParams } from "react-router";
import { useRef, useState } from "react";
import html2canvas from 'html2canvas-pro';
import { titleCase } from "text-case";
import { motion } from "framer-motion";
import { Button, styled } from "@mui/material";


interface CertificateProps { }

const Certificate: FC<CertificateProps> = () => {
    const [imageUrl, setImageUrl] = useState<any>()
    console.log("imageUrl", imageUrl);

    const para = useParams()
    const captureRef = useRef<HTMLDivElement | null>(null);


    // const handleDownload = async (): Promise<void> => {
    //     try {
    //         if (!captureRef.current) return;

    //         const element = captureRef.current;

    //         // 1️⃣ Measure current rendered size
    //         const rect = element.getBoundingClientRect();
    //         const currentWidth = rect.width;

    //         // 2️⃣ Target A4 300 DPI width
    //         const targetWidth = 2480; // A4 width in pixels (300 DPI)

    //         // 3️⃣ Calculate dynamic scale (keeps exact layout ratio)
    //         const scaleFactor = targetWidth / currentWidth;

    //         // 4️⃣ Capture without modifying UI
    //         const canvas = await html2canvas(element, {
    //             scale: scaleFactor,
    //             useCORS: true,
    //             allowTaint: false,
    //             backgroundColor: "#ffffff",
    //             imageTimeout: 0,
    //             logging: false,
    //             windowWidth: document.documentElement.scrollWidth,
    //             windowHeight: document.documentElement.scrollHeight,
    //         });

    //         // 5️⃣ Download

    //         const image = canvas.toDataURL("https://res.cloudinary.com/dmlhzurnk/image/upload/v1772476002/Congratulations_rpp8aw.png");

    //         const link = document.createElement("a");
    //         link.href = image;
    //         link.download = "certificate.png";
    //         link.click();

    //     } catch (error) {
    //         console.error("Download failed:", error);
    //     }
    // };




    // const handleDownload = async () => {
    //     if (!captureRef.current) return;

    //     const canvas = await html2canvas(captureRef.current, {
    //         scale: 3,          // High quality
    //         useCORS: true,
    //         allowTaint: true,
    //         backgroundColor:null,
    //         imageTimeout:0
    //     });

    //     const image = canvas.toDataURL("https://res.cloudinary.com/dmlhzurnk/image/upload/v1772476002/Congratulations_rpp8aw.png");

    //     const link = document.createElement("a");
    //     link.href = image;
    //     link.download = "certificate.png";
    //     link.click();
    // };
    // const handleDownload = async (): Promise<void> => {
    //     if (!captureRef.current) return;

    //     const originalElement = captureRef.current;

    //     const textElements = originalElement.querySelectorAll(".certificate-text");

    //     textElements.forEach((el) => {
    //         (el as HTMLElement).style.transform = "scale(2)";
    //         (el as HTMLElement).style.transformOrigin = "center";
    //     });

    //     // 🔥 Clone element (UI disturb ആകില്ല)
    //     const clonedElement = originalElement.cloneNode(true) as HTMLDivElement;

    //     clonedElement.style.position = "fixed";
    //     clonedElement.style.top = "0";
    //     clonedElement.style.left = "0";
    //     clonedElement.style.width = "2480px";
    //     // clonedElement.style.height = "3508px";
    //     clonedElement.style.zIndex = "-1";   // 🔥 important
    //     // clonedElement.style.background = "white"; // 🔥 force white

    //     document.body.appendChild(clonedElement);

    //     const canvas = await html2canvas(clonedElement, {
    //         scale: 4,
    //         useCORS: true,
    //         backgroundColor: "#ffffff",
    //     });

    //     document.body.removeChild(clonedElement); // cleanup
    //     textElements.forEach((el) => {
    //         (el as HTMLElement).style.transform = "scale(1)";
    //     });
    //     const link = document.createElement("a");
    //     link.download = "certificate.png";
    //     link.href = canvas.toDataURL("image/png", 1.0);
    //     link.click();
    // };
    const handleDownload = async (): Promise<void> => {
        if (!captureRef.current) return;

        const originalElement = captureRef.current;

        // 🔥 Clone first (original touch ചെയ്യരുത്)
        const clonedElement = originalElement.cloneNode(true) as HTMLDivElement;

        clonedElement.style.position = "fixed";
        clonedElement.style.top = "0";
        clonedElement.style.left = "0";
        clonedElement.style.width = "2480px";
        // clonedElement.style.background = "#ffffff";
        clonedElement.style.zIndex = "-9999";

        document.body.appendChild(clonedElement);

        // 🔥 Scale ONLY inside clone
        const textElements = clonedElement.querySelectorAll(".certificate-text");

        textElements.forEach((el) => {
            (el as HTMLElement).style.transform = "scale(3)";
            (el as HTMLElement).style.transformOrigin = "center";
        });

        const canvas = await html2canvas(clonedElement, {
            scale: 4,
            useCORS: true,
            backgroundColor: "#ffffff",
        });

        document.body.removeChild(clonedElement);

        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();
    };




    // lettest


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
                style={{ backgroundImage: "url('https://res.cloudinary.com/dmlhzurnk/image/upload/v1772534009/Congratulations_Ex_1_rzuizu.jpg')" }}
            >

                <div className="absolute inset-0">
                    {/* Profile Image */}
                    {imageUrl && <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        src={imageUrl ? imageUrl : "https://randomuser.me/api/portraits/men/75.jpg"}
                        alt="Profile"
                        className="absolute left-[11%] top-[50%] w-[32%] aspect-square transform -rotate-3 skew-y-2   border-3 border-white shadow-xl object-cover"
                    />}

                    {/* Name Text */}
                    <h1 className="absolute certificate-text top-[78%] left-1/2 -translate-x-1/2 text-[3vw] font-light text-mauve-800" style={{ fontFamily: 'custom-font-Unbroken', fontSize: "3.9vw" }}>
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





        {/* const element = document.getElementById("certificate");

const originalWidth = element.style.width;

element.style.width = "2480px"; // A4 300dpi width

html2canvas(element, { scale: 1 }).then((canvas) => {
  const link = document.createElement("a");
  link.download = "certificate.png";
  link.href = canvas.toDataURL("image/png", 1.0);
  link.click();

  element.style.width = originalWidth; // reset
}); */}













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