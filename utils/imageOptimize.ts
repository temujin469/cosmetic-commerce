import ImageUrlBuilder from "@sanity/image-url";
import client from '../lib/sanity'

const builder = ImageUrlBuilder(client);

export const urlFor = (source:{})=> {
  return builder.image(source);
}