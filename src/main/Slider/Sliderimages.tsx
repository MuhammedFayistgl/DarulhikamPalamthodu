import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/src/assets/a.jpeg" },
  { url: "/src/assets/b.jpeg" },
  { url: "/src/assets/c.jpeg" },
  { url: "/src/assets/e.jpeg" },
  { url: "/src/assets/f.jpeg" },
  { url: "/src/assets/g.jpeg" },
  { url: "/src/assets/h.jpeg" },
];

const SliderImages = () => {
  return (
    <>



      <Box marginTop={15}>
        <div style={{ display: "flex", justifyContent: "center", }}>
          <SimpleImageSlider
            width={"90%"}
            height={"50VH"}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            loop={true}
            autoPlay={true}
            autoPlayDelay={2.0}
          />
        </div>
      </Box>

    </>

  );
}
export default SliderImages;

