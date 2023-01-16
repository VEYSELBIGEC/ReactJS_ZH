import React from "react";

const ImageGallery = () => {
  const gallery = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ];

  return (
    <div>
      {gallery.map((image) => (
        <div>
          <img src={`assets/img/${image}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;