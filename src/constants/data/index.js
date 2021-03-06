import icons from '../icons';
import images from '../images';

const myProfile = {
  name: 'Food Delivery',
  profile_image: images.profile,
  address: 'District 1, HCM',
};

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: icons.burger,
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: icons.cherry,
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  title: 'Chicken patty hamburger',
  description: 'A round, flat piece of minced beef, fried and usually eaten between two halves of a bread roll',
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('assets/data/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  title: 'Mexican tortilla & tacos',
  description: 'Tacos – such a great Mexican dish, balanced and delicious! Even better when it’s hot! And when we say hot, it’s HOT! A mix of red Caribbean Habanero and yellow Carolina Reaper will blow your a… taste buds off, and for that Greek yogurt is your best friend! Colorful hot tacos with fresh minced beef are the great dinner idea for a thematic party!',
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('assets/data/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  title: 'Spiced vegetable biryani',
  description: 'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('assets/data/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  title: 'Grilled vegetables sandwich',
  description: 'These no-cook vegetarian wrap sandwiches are filled with a mixture of goat cheese, roasted red peppers, mixed greens and carrot and are perfect for a brown-bag lunch or light dinner.',
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('assets/data/wrap_sandwich.png'),
};

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: 'Master Card',
    icon: require('assets/icons/mastercard.png'),
    card_no: '1234',
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('assets/icons/google.png'),
    card_no: '1234',
  },
];

const allCards = [
  {
    id: 1,
    name: 'Apple Pay',
    icon: require('assets/icons/apple.png'),
  },
  {
    id: 2,
    name: 'Visa',
    icon: require('assets/icons/visa.png'),
  },
  {
    id: 3,
    name: 'PayPal',
    icon: require('assets/icons/paypal.png'),
  },
  {
    id: 4,
    name: 'Google Pay',
    icon: require('assets/icons/google.png'),
  },
  {
    id: 5,
    name: 'Master Card',
    icon: require('assets/icons/mastercard.png'),
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 10.753353,
    longitude: 106.661198,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const notifications = [
  {
      id: 0,
      title: "Today",
      data: [
          {
              id: 1,
              avatar: images.logo_01,
              name: "Eat Me",
              created_at: "a few seconds ago",
              message: "Buy 1 get 1 free for small sizes"
          },
          {
              id: 2,
              avatar: images.logo_01,
              name: "Eat Me",
              created_at: "1 hour ago",
              message: "Your 50% discount code is: ON50DIS. Apply on checkout."
          },
          {
              id: 3,
              avatar: images.logo_01,
              name: "Eat Me",
              created_at: "5 days ago",
              message: "Buy 1 get 1 free for small sizes"
          }
      ],
  },
  {
      id: 1,
      title: "Yesterday",
      data: [
          {
              id: 4,
              avatar: images.logo_01,
              name: "Eat Me",
              created_at: "1 day ago",
              message: "You just signed in from another device check inbox for more details."
          },
          {
              id: 5,
              avatar: images.logo_01,
              name: "Eat Me",
              created_at: "1 day ago",
              message: "Your 50% discount code is: ON50DIS. Apply on checkout."
          },
      ],
  },
];

const orders_history = [
  {
    id: 0,
    title: '19 sep 2022',
    data: [
      {
        id: 0,
        avatar: icons.pizza_hut,
        name: 'Pizza Hut',
        date_time: '19 sep, 14: 30',
        items: 3,
        status: 'Delivered',
        totalPrice: 35.30
      },
      {
        id: 1,
        avatar: icons.kfc,
        name: 'KFC',
        date_time: '19 sep, 12: 30',
        items: 4,
        status: 'Delivered',
        totalPrice: 55.00
      },
      {
        id: 2,
        avatar: icons.dominos,
        name: 'Domino\'s Pizza',
        date_time: '19 sep, 10: 30',
        items: 1,
        status: 'Cancel',
        totalPrice: 15.50
      }
    ]
  },
  {
    id: 1,
    title: '15 sep 2022',
    data: [
      {
        id: 0,
        avatar: icons.starbucks,
        name: 'Pizza Hut',
        date_time: '15 sep, 14: 30',
        items: 3,
        status: 'Delivered',
        totalPrice: 40.00
      },
      {
        id: 1,
        avatar: icons.burger_king,
        name: 'KFC',
        date_time: '15 sep, 12: 30',
        items: 2,
        status: 'Cancel',
        totalPrice: 20.30
      },
    ]
  }
];

const orders_upcoming = [
  {
    id: 0,
    title: 'Orders In Progress',
    data: [
      {
        id: 0,
        avatar: icons.starbucks,
        name: 'Starbucks',
        date_time: '27 sep, 12: 30',
        items: 3,
        status: 'InProgress',
        order_code: '#88888'
      },
      {
        id: 1,
        avatar: icons.mcdonalds,
        name: 'McDonalds',
        date_time: '27 sep, 20: 30',
        items: 4,
        status: 'InProgress',
        order_code: '#88887'
      }
    ]
  },
  {
    id: 1,
    title: 'Lastest Orders',
    data: [
      {
        id: 0,
        avatar: icons.starbucks,
        name: 'Pizza Hut',
        date_time: '27 sep, 14: 30',
        items: 3,
        status: 'Delivered',
        totalPrice: 40.45
      },
      {
        id: 1,
        avatar: icons.burger_king,
        name: 'KFC',
        date_time: '27 sep, 12: 30',
        items: 2,
        status: 'Delivered',
        totalPrice: 20.35
      },
    ]
  }
];

export default {
  myProfile,
  categories,
  menu,
  vegBiryani,
  sizes,
  myCart,
  fromLocs,
  allCards,
  myCards,
  notifications,
  orders_history,
  orders_upcoming
};
