"use client"

import React, { useState } from "react"
import Carousel from "react-material-ui-carousel"
import "../../styles/Example.scss"

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@mui/material"
import { SettingsProps, SettingsT } from "@/types"

export const DefaultSettingsT: SettingsT = {
  autoPlay: true,
  animation: "fade",
  indicators: true,
  duration: 500,
  navButtonsAlwaysVisible: false,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true
}

const Settings = ({ settings, setSettings }: SettingsProps) => {}

const Example = () => {
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT)

  return (
    <div style={{ color: "#494949" }}>
      <Carousel
        className="Example"
        {...settings}
        // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
        // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
        // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

        // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
        // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
        // indicatorContainerProps={{style: {margin: "20px"}}}
        // NextIcon='next'
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          )
        })}
      </Carousel>
      <br />
      {/* <Settings settings={settings} setSettings={setSettings} /> */}
    </div>
  )
}

type Item = {
  Name: string
  Caption: string
  contentPosition: "left" | "right" | "middle"
  Items: { Name: string; Image: string }[]
}

interface BannerProps {
  item: Item
  contentPosition: "left" | "right" | "middle"
  length?: number
}

const Banner = (props: BannerProps) => {
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems: number = props.length ? props.length : 3
  const mediaLength = totalItems - 1

  let items = []
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>
        <Typography className="Caption">{props.item.Caption}</Typography>
        <Button variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i]
    const media = (
      <Grid item xs={4} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    )
    items.push(media)
  }

  if (contentPosition === "left") {
    items.unshift(content)
  } else if (contentPosition === "right") {
    items.push(content)
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content)
  }
  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}

const items: Item[] = [
  {
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "/assets/images/image-10.jpg"
      },
      {
        Name: "iPhone",
        Image: "/assets/images/post-2-640x550.jpg"
      }
    ]
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "/assets/images/image-9.jpeg"
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "/assets/images/post-3-640x550.jpg"
      }
    ]
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "/assets/images/post-4-640x550.jpg"
      },
      {
        Name: "Floral Vase",
        Image: "https://source.unsplash.com/featured/?vase"
      }
    ]
  }
]

export default Example
