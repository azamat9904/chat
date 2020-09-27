import React from "react";
import "./Home.scss";

import { Message } from "../../components/index";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg"
        text="Hello"
        date={new Date("Fri Sep 25 2020 22:26:30")}
        isMe={false}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
          },
        ]}
      />
      <Message
        avatar="https://4.bp.blogspot.com/-txKoWDBmvzY/XHAcBmIiZxI/AAAAAAAAC5o/wOkD9xoHn28Dl0EEslKhuI-OzP8_xvTUwCLcBGAs/s1600/2.jpg"
        text="Hello my friend!"
        date={new Date("Fri Sep 25 2020 22:26:30")}
        isMe={true}
        isReaded={true}
      />
    </section>
  );
};

export default Home;
