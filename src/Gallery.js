import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";

export function Gallery() {
  return (
    <div>
      <ImageGallery />
    </div>
  );
}

function ImageGallery() {
  let imageArr = [
    { img: "Resources/gallery1.png" },

    { img: "Resources/gallery2.png" },

    { img: "Resources/gallery3.png" },

    { img: "Resources/gallery4.png" },

    { img: "Resources/gallery5.png" },

    { img: "Resources/gallery6.png" },

    { img: "Resources/gallery7.png" },

    { img: "Resources/gallery8.png" },
  ];
  return (
    <div class="ui mt-4 grid p-4">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <h1>Gallery</h1>
        <hr />
        <div class="ui four cards">
          {imageArr.map((itms) => {
            return (
              <div class="ui red card">
                <div class="image">
                  <img src={itms.img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="two wide column"></div>
    </div>
  );
}
