import React from "react";
import "./Home.scss";

import { Message, Dialogs } from "../../components/index";
import { items } from "../../data/mock";

const Home = () => {
  return (
    <section className="home">
      <Dialogs items={items} />
      {/* <Dialogs items = [{
        user:{
          fullname:'Федор Достаевский',
          avatar:null
        },
        message: {
          text:'Мы все привуетствуем вам глубочайшее наше почтение и целуем ваши руки,дражайший папенька',
        isReaded:false,
        updated_at:new Date()
        }
      }
    ]/> */}

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
        audio="https://cdn1.sefon.pro/files/prev/2/%D0%95%D0%B3%D0%BE%D1%80%20%D0%9A%D1%80%D0%B8%D0%B4%20%26%20MOLLY%20-%20%D0%95%D1%81%D0%BB%D0%B8%20%D0%A2%D1%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%9D%D0%B5%20%D0%9B%D1%8E%D0%B1%D0%B8%D1%88%D1%8C%20%28192kbps%29.mp3"
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
