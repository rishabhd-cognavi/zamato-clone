import { create } from "zustand";

export const useFoodStore = create((set) => ({
  foodList: [
    {
      index: 1,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ee/ab/bc/paneer-veggie-platter.jpg?w=600&h=400&s=1",
      offer: "10%",
      name: "Red Meat",
      description: "burger",
      price: "10",
    },
    {
      index: 2,
      image:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      offer: "20%",
      name: "Pizza",
      description: "burger",
      price: "10",
    },
    {
      index: 3,
      image:
        "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
      offer: "5%",
      name: "Burger",
      description: "burger",
      price: "10",
    },
    {
      index: 4,
      image:
        "https://urbanfarmie.com/wp-content/uploads/Dal-Tadka-Square-Overhead.jpg",
      offer: "10%",
      name: "Dal",
      description: "burger",
      price: "10",
    },
  ],
  cart: [],
  //get the index of the item and increase the count
  //if item not exit add it to array
  addToCart: (item) =>
    set((state) => {
      const data = state.cart.find(({ index }) => index === item.index);

      return {
        cart: data
          ? [
              ...state.cart.filter((i) => i.index !== item.index),
              { ...data, count: data.count + 1 },
            ]
          : [...state.cart, { ...item, count: 1 }],
      };
    }),
  inc: (index) =>
    set((state) => {
      const data = state.cart.find((item) => item.index === index);
      return {
        cart: [
          { ...data, count: data.count + 1 },
          ...state.cart.filter((item) => item.index !== index),
        ],
      };
    }),
  dec: (index) =>
    set((state) => {
      const data = state.cart.find((item) => item.index === index);
      return {
        cart: [
          { ...data, count: data.count - 1 },
          ...state.cart.filter((item) => item.index !== index),
        ],
      };
    }),
  deleteCartItem: (index) =>
    set((state) => ({
      cart: [...state.cart.filter((item) => item.index !== index)],
    })),
}));
// inc: (id) => set((state) => state.cart.filter((item) => (item.index = id)));
