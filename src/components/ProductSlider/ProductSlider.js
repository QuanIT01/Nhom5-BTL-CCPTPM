/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { cumulativeOffSet } from "../../utilities/cumulativeOffset";
import "./ProductSlider.scss";

const ProductSlider = ({ images }) => {
  const imageRef = React.createRef();
  const [img, setImg] = useState(images[0]);
  const [aItem, setAItem] = useState(0);

  const handleImageChange = (e) => {
    const currentX = e.clientX - cumulativeOffSet(imageRef.current).left;

    console.dir(imageRef.current);

    const part = imageRef.current.clientWidth / images.length;
    console.log(Math.ceil(currentX / part) - 1);

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= images.length) {
      imgIndex = images.length - 1;
    }
    setAItem(imgIndex);
    setImg(images[imgIndex]);
  };

  const handleMouseOut = (e) => {
    setImg(images[0]);
    setAItem(0);
  };

  const changeImage = (i) => {
    setImg(images[i]);
    setAItem(i);
  };
  return (
    <aside className="col-sm-3 col-xs-12">
      <article className="gallery-wrap">
        <div className="img-big-wrap">
          <div>
            <a href="#">
              <img
                ref={imageRef}
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                src={img}
              />
            </a>
          </div>
        </div>
        <div className="img-small-wrap">
          {images.map((img, i) => (
            <div
              className="item-gallery"
              onClick={() => {
                changeImage(i);
              }}
            >
              <img src={img} />
            </div>
          ))}
        </div>
      </article>
    </aside>
  );
};

export default ProductSlider;
