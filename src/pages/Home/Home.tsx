import React from "react";
import "./Home.scss";

import { Message, DialogItem } from "../../components/index";

const Home = () => {
  return (
    <section className="home">
      <div className="dialogs">
        <DialogItem
          user={{
            fullname: "Федор Достоевский",
            isMe: true,
            isReaded: true,
            avatar:
              "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
          }}
          message={
            "Мы все сведетельствуем вам шоуочайшее наше почтение и целуем ваши  ручки дрожайший папенька"
          }
        />

        <DialogItem
          user={{
            fullname: "Федор Достоевский",
            online: true,
            isMe: true,
            isReaded: false,
            avatar:
              "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
          }}
          message={
            "Мы все сведетельствуем вам шоуочайшее наше почтение и целуем ваши  ручки дрожайший папенька"
          }
        />

        <DialogItem
          user={{
            fullname: "Федор Достоевский",
            avatar:
              "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
          }}
          message={
            "Мы все сведетельствуем вам шоуочайшее наше почтение и целуем ваши  ручки дрожайший папенька"
          }
          unreaded={10}
        />

        <DialogItem
          user={{
            fullname: "Федор Достоевский",
            online: true,
            avatar:
              "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
          }}
          message={
            "Мы все сведетельствуем вам шоуочайшее наше почтение и целуем ваши  ручки дрожайший папенька"
          }
        />
      </div>
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

      {/* <Message
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
