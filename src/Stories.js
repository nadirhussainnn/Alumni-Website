import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";

export function Stories() {
  return (
    <div>
      <StoriesDescription />
    </div>
  );
}

function StoriesDescription() {
  let storiesArr = [
    {
      title: "Sukkur IBA",
      img: "Resources/gallery5.png",
      description:
        "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    },
    {
      title: "International Conference",
      img: "Resources/gallery7.png",
      description:
        "In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    },
  ];

  return (
    <div class="ui mt-4 grid p-4">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <h1>Stories</h1>
        <hr />
        <div>
          {storiesArr.map((itms) => {
            return (
              <div class="ui items">
                <div class="item shadow-lg p-4">
                  <div class="ui small image">
                    <img src={itms.img} style={{ borderRadius: "60%" }} />
                  </div>
                  <div class="middle aligned content">
                    <div class="header">{itms.title}</div>
                    <div class="description">
                      <p>{itms.description}</p>
                    </div>
                  </div>
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
