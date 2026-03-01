import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.ibb.co/SDqckczs/a.jpg" },
  { url: "https://i.ibb.co/23QxcgFb/b.jpg" },
  { url: "https://i.ibb.co/1tpnXJ3b/c.jpg" },
  { url: "https://i.ibb.co/5gBWYFLM/e.jpg" },
  { url: "https://i.ibb.co/qf0k2H4/f.jpg" },
  { url: "https://i.ibb.co/HTHZschv/g.jpg" },
  { url: "https://i.ibb.co/Ld3LKYGm/h.jpg" },
];

// https://ibb.co/TDz1Q1sv   [url=https://ibb.co/TDz1Q1sv][img]https://i.ibb.co/TDz1Q1sv/a.jpg[/img][/url]
// https://ibb.co/YBMmfpNr
// https://ibb.co/fzKSNGbQ
// https://ibb.co/4nPZsdpm
// https://ibb.co/PnTwV2b
// https://ibb.co/5hRZyQKD
// https://ibb.co/GQqKmnhy

const SliderImages = () => {
  return (
    <>



      <Box marginTop={15} >
        <div style={{ display: "flex", justifyContent: "center", }}>
          <SimpleImageSlider  style={{ borderRadius:50}}
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

