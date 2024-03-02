   "use client"
   
  import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
  import Image from "next/image";
 
  const CarouselWithContent = () => {
    return (
      <Carousel 
        transition={{ duration: 1 }}
        autoplay={true}
        navigation={() => {}}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-1/4 bottom-0 bg-white p-5 my-2 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute left-1/4 ml-14 bottom-0 bg-white p-5 my-2 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        
        <div className="relative h-[40rem] w-full">
          <Image
              src="/assets/images/image-10.jpg"
              alt=""
              fill={true}
              className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-dark-100/40">
            <div className="w-3/4 text-center md:w-2/4">
             <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
               Raising Money Has Never Been So Easy
              </Typography>

              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-6xl lg:text-5xl font-bold"
              > 
                Crowdfunding Platforms
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                   START A PROJECT
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[40rem] w-full">
            <Image
              src="/assets/images/image-9.jpeg"
              alt=""
              fill={true}
              className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-dark-100/40">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
               Raising Money Has Never Been So Easy
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 text-3xl md:text-6xl lg:text-5xl font-bold"
              >
                We help surface innovations in tech
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                   START A PROJECT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }

  export default CarouselWithContent;


