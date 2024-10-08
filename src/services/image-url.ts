const getCroppedImageUrl = (url: string) => {
  const target = 'media/';
  //Goin to that Index
  const index = url.indexOf(target) + target.length;
  //Get the substring from that index till the end
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
export default getCroppedImageUrl;
