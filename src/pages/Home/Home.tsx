import React from "react";
import "./Home.scss";

import { Message, Dialogs } from "../../components/index";
import { items } from "../../data/mock";

const Home = () => {
  return (
    <section className="home">
      <Dialogs items={items} />

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
        avatar="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg"
        audio="https://s1.muzter.net/files/mp3/tones_and_i_-_dance_monkey_muzter.net_128.mp3"
        date={new Date()}
      />
      {/* <Message
        avatar="https://4.bp.blogspot.com/-txKoWDBmvzY/XHAcBmIiZxI/AAAAAAAAC5o/wOkD9xoHn28Dl0EEslKhuI-OzP8_xvTUwCLcBGAs/s1600/2.jpg"
        text="Hello my friend!"
        date={new Date("Fri Sep 25 2020 22:26:30")}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg"
        isTyping
      />
      <Message
        avatar="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
      /> */}
    </section>
  );
};

export default Home;
