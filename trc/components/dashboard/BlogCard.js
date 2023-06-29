import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import user1 from "../../../assets/images/backgrounds/u2.jpg";
import user2 from "../../../assets/images/backgrounds/u3.jpg";
import user3 from "../../../assets/images/backgrounds/u4.jpg";

const blogs = [
  {
    img: user1,
    title: "Super awesome, Angular 12 is coming soon!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "error",
  },
  {
    img: user2,
    title: "Super awesome, Angular 12 is coming soon!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "warning",
  },
  {
    img: user3,
    title: "Super awesome, Angular 12 is coming soon!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  const [ slider, setSlider ] = useState("");
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getslider`).then((resp)=>{
      return resp.json();
      }).then((data)=>{
        console.log(data)
        setSlider(data)
      })
  },[])
  return (
    <Grid container>
      {slider&&slider.map((item) => (
        <Grid
          key={item._id}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <img src={item.img} alt="img" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {item.title}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;



