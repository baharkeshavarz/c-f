export default function cellphoneValidation(value: string) {
    const firstDigit = value.charAt(0)
    const secondDigit = value.charAt(1)
    if (!value.length) {
      return true
    } else {
      if (firstDigit !== "0" || secondDigit === "9") {
        return "شماره تماس نادرست است"
      } else {
        return true
      }
    }
  }

  // export default function generateErrorMessage(t:any, lbl: string, info: string) {
  //   //  Verification code must be 6 digits
  //   let minLengthMsg = `${lbl} must be at least ${minLength} digit.`

  // }


  