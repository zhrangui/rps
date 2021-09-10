import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";
// @ts-ignore

interface Props {
  url: string;
  content: string[];
  email?: string
}

const ImgageCard: React.FC<Props> = ({ url, content, email }) => {
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardMedia
        component="img"
        image={url}
      />
      <CardContent
        sx={{
          textAlign: "center",
          fontSize: 12
        }}>
        {
          content.map((item, index) => {
            return (
              <div
                key={item + index}>
                {item}
              </div>
            )
          })
        }
        {email &&
          <Link href="mailto:brokersupport@rpsrealsolutions.com"
            target="_blank"
            rel="noreferrer">
            Email here
          </Link>
        }
      </CardContent>
    </Card>
  );
}

export default ImgageCard;