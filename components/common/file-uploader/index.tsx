import { useRef, useState } from "react"
import {
  Stack,
  Typography,
  Grid,
  useTheme,
  Button,
  Box,
  CircularProgress
} from "@mui/material"
import MainCard from "@/components/common/main-card"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown"
import { toast } from "react-toastify"
import { useMediaQuery } from "@mui/material"
import { Photo } from "@mui/icons-material"
import Image from "next/image"

interface FileUploaderProps {
  t: any;
  title: string
  subTitle: string
  setFile: any
  sx?: React.CSSProperties
}

const FileUploader = ({ t, title, subTitle, setFile, sx }: FileUploaderProps) => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("xs"))
  const inputRef = useRef()
  const theme = useTheme()
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [isPdf, setIsPdf] = useState(false)

  // Handle Change Input
  const onImageChange = (e: any) => {
    setLoading(false)

    if (e.target.files && e.target.files[0]) {
      const fileSize = e.target.files[0].size / 1024 / 1024 // in MiB

      if (fileSize <= 5) {
        let reader = new FileReader()

        reader.readAsDataURL(e.target.files[0])

        reader.onload = function () {
          setImage(URL.createObjectURL(e.target.files[0]))

          // Check the file type
          const fileType = e.target.files[0].type

          if (fileType.startsWith("image/")) {
            // It's an image
            setFile(reader!.result!.split(",")[1])
            setIsPdf(false)
          } else if (fileType === "application/pdf") {
            setFile(reader!.result!.split(",")[1])
            setIsPdf(!!reader.result)
          } else {
            // Unsupported file type
            toast.error("Unsupported file type.")
          }
        }
      } else {
        toast.error("The maximum file size is 5 MB")
      }
    }
  }

  const downloadPdfFile = async () => {
    // Fetch the content of the Blob URL
    const response = await fetch(image)
    const blob = await response.blob()

    // Create a blob URL for the PDF Blob
    const blobUrl = URL.createObjectURL(blob)

    // Create a link element
    const downloadLink = document.createElement("a")

    // Set the href and download attributes
    downloadLink.href = blobUrl
    downloadLink.download = "تصویر_چک.pdf" // You can set the desired file name here

    // Append the link to the body
    document.body.appendChild(downloadLink)

    // Simulate a click on the link to trigger the download
    downloadLink.click()

    // Remove the link from the body
    document.body.removeChild(downloadLink)

    // Release the blob URL
    URL.revokeObjectURL(blobUrl)
  }

  // Handle Open Select File
  const handleFileUpload = () => {
    if (!loading) {
      inputRef.current.click()
    } else {
      setLoading(true)
    }
  }

  return (
    <MainCard
      shadow={3}
      sx={{
        borderRadius: "10px",
        cursor: "pointer",
        display: "block",
        minHeight: "135px",
        bgcolor: theme.palette.common.black,
        mt: 1,
        ...sx
      }}
      onClick={handleFileUpload}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        multiple
        accept={["image/jpeg", "image/png", "application/pdf"]}
        onChange={onImageChange}
      />

      {image && !loading && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 1
            }}
          >
            <Button
              color="warning"
              variant="contained"
              fullWidth={isMobile}
              startIcon={<Photo />}
              size="medium"
              sx={{
                background: `${theme.palette.brown[500]} !important`,
                borderRadius: "4px",
                px: 2
              }}
            >
              Change the {title}
            </Button>
          </Box>
          {!isMobile ? (
            isPdf ? (
              <Grid
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={2}
              >
                <iframe
                  frameborder="0"
                  allowtransparency="yes"
                  scrolling="no"
                  width="70%"
                  height="500"
                  src={isPdf + "#toolbar=0"}
                />
              </Grid>
            ) : (
              <Box>
                <Image
                  src={image}
                  alt={title}
                  width={100}
                  height={100}
                  className="resize_fit_center"
                />
              </Box>
            )
          ) : isPdf ? (
            <Stack
              direction="row"
              justifyContent="center"
              onClick={e => {
                e.stopPropagation() // Stop the event from propagating to the parent (handleFileUpload)
                downloadPdfFile() // Call the downloadPdfFile function
              }}
            >
              <Button
                size="large"
                startIcon={<ArrowCircleDownIcon />}
                variant="contained"
                sx={{ borderRadius: "8px" }}
              >
                Download the {tilte}
              </Button>
            </Stack>
          ) : (
            <Box>
              <img
                src={image}
                className="resize_fit_center"
                alt="selected_img"
              />
            </Box>
          )}
        </>
      )}
      {loading && !image && (
        <Box sx={{ py: 3 }}>
          <CircularProgress />
        </Box>
      )}
      {!image && !loading && (
        <Box
          sx={{
            m: 0.3,
            borderRadius: "6px",
            border: `1px solid ${theme.palette.divider}`,
            background: theme.palette.common.white
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignContent="center"
            my={2}
          >
            <Stack direction="row" alignItems="center" justifyContent="center">
              <CloudUploadIcon />
              <Stack ml={3}>
                <Typography variant="h5" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="caption" color={theme.palette.grey[500]}>
                  {subTitle}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )}

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="caption" sx={{ mt: 1, fontWeight: 600, color: "white" }}>
            {t.messages.fileMaxSize}
        </Typography>
      </Box>
    </MainCard>
  )
}

export default FileUploader
