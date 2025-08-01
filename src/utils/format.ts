export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width,
) {
  // console.log(imageUrl + `?param=${width}x${height}`)
  return imageUrl + `?param=${width}x${height}`;
}
