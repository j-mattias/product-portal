import { useState } from "react";

interface IImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: IImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  // Switch the hero image depending on which preview was clicked
  const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    setMainImage(target.src);
  };

  return (
    <figure className="image-gallery">
      <img
        className="image-gallery__hero b-radius-4"
        src={mainImage}
        alt={`${title} packshot image`}
      />
      <div className="image-gallery__wrapper">
        {images.map((image, i) => (
          <img
            className={`image-gallery__preview ${
              mainImage === image ? "box-shadow b-radius-4" : ""
            }`}
            src={image}
            alt={`${title} packshot image ${i}`}
            key={image}
            onClick={handleClick}
          />
        ))}
      </div>
    </figure>
  );
}
