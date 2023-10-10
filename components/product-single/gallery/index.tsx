import {useState} from 'react'
type GalleryProductType = {
  images: string[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const [image,setImage] = useState(0);

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map((image,index) => (
          <div key={image} className="product-gallery__thumb" onClick={()=>setImage(index)}>
            <img src='https://htindiatech.com/wp-content/uploads/2021/04/product_4.png' alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={images[image]} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  