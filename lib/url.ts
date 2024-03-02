export const findLocalFromUrl = (pathName: string) => {
    const segments = pathName.split("/")
    return segments[1];
  }