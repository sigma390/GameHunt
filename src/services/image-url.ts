import img from '../assets/default-placeholder.png';

const getCroppedImageUrl = (url: string) => {
  if (!url) return img;

  const target = 'media/';
  //Goin to that Index
  const index = url.indexOf(target) + target.length;
  //Get the substring from that index till the end
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
export default getCroppedImageUrl;
