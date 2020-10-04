import { dialog } from "../types/interfaces";

export const items: dialog[] = [
  {
    user: {
      _id: "94031b5971338414a61aba503ac951ca",
      fullname: "Федор Достоевский",
      // avatar:
      //   "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
      online: true,
    },
    message: {
      text:
        "Мы все привуетствуем вам глубочайшее наше почтение и целуем ваши руки,дражайший папенька",
      isReaded: true,
      created_at: "Sat Oct 03 2020 10:40:21 GMT+0600",
    },
  },
  {
    user: {
      _id: "af7ff206f416a4f7bcb42b8009dae998",
      fullname: "Федор Достоевский",
      // avatar:
      //   "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
      online: false,
      isMe: true,
    },
    message: {
      text:
        "Мы все привуетствуем вам глубочайшее наше почтение и целуем ваши руки,дражайший папенька",
      isReaded: true,
      created_at: "Sat Oct 02 2020 18:40:21 GMT+0600",
    },
  },
  {
    user: {
      _id: "74762f64b2f6ab9327b121910ffb6f9b",
      fullname: "Макс",
      online: true,
      isMe: true,
    },
    message: {
      text:
        "Мы все привуетствуем вам глубочайшее наше почтение и целуем ваши руки,дражайший папенька",
      isReaded: false,
      created_at: "Sat Oct 03 2020 21:40:21 GMT+0600",
    },
  },
  {
    user: {
      _id: "1a91d7e656c3e94931567ff253922c9f",
      fullname: "Федор Достоевский",
      // avatar:
      //   "https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg",
      online: true,
      isMe: true,
    },
    message: {
      text:
        "Мы все привуетствуем вам глубочайшее наше почтение и целуем ваши руки,дражайший папенька",
      unreaded: 5,
      created_at: "Sat Oct 03 2020 18:40:21 GMT+0600",
    },
  },
];
