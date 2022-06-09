//function for find images in book resources
export const getImages = (book) => {

  let imageURL;
  const image = book.resources
    .filter((option) => option.type === "image/jpeg")
    .find((size) => size.uri.includes("medium" || "small"));
  if (image) {
    imageURL=image.uri;
  }
  else {
    imageURL =
      "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";
  }
  return imageURL;
};
