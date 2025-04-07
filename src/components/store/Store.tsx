import { create } from "zustand";

export const useFoodStore = create((set) => ({
  foodList: [
    {
      index: 1,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ee/ab/bc/paneer-veggie-platter.jpg?w=600&h=400&s=1",
      offer: "10%",
      name: "Red Meat",
      description:
        "A hearty platter of grilled red meat served with sautéed vegetables.",
      price: "10",
    },
    {
      index: 2,
      image:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      offer: "20%",
      name: "Pizza",
      description:
        "Classic cheese pizza with a crispy crust and rich tomato sauce.",
      price: "10",
    },
    {
      index: 3,
      image:
        "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
      offer: "5%",
      name: "Burger",
      description:
        "Juicy beef patty stacked with lettuce, tomato, and special sauce.",
      price: "10",
    },
    {
      index: 4,
      image:
        "https://urbanfarmie.com/wp-content/uploads/Dal-Tadka-Square-Overhead.jpg",
      offer: "10%",
      name: "Dal",
      description: "Lentil curry tempered with aromatic spices and herbs.",
      price: "10",
    },
    {
      index: 5,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg",
      offer: "15%",
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces.",
      price: "12",
    },
    {
      index: 6,
      image: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg",
      offer: "10%",
      name: "Veg Biryani",
      description: "Spiced rice dish loaded with vegetables and fried onions.",
      price: "9",
    },
    {
      index: 7,
      image:
        "https://img-global.cpcdn.com/recipes/a0a9b7cf9cfdeaa5/400x400cq70/photo.jpg",
      offer: "25%",
      name: "Shami Kebab",
      description: "Minced chicken patties blended with herbs and spices.",
      price: "11",
    },
    {
      index: 8,
      image:
        "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg",
      offer: "5%",
      name: "Paneer Butter Masala",
      description: "Soft paneer cubes in a creamy tomato and butter gravy.",
      price: "10",
    },
    {
      index: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXNH_xCEYOU9wjkNFLKfCHUf1mvc8QmR4g&s",
      offer: "30%",
      name: "Masala Dosa",
      description: "South Indian crepe filled with spiced mashed potatoes.",
      price: "8",
    },
    {
      index: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZNFg800X79gxUUJfrAXbuYA0H4WBJo0WBQ&s",
      offer: "20%",
      name: "Chole Bhature",
      description: "Spicy chickpeas served with fluffy deep-fried bread.",
      price: "9",
    },
    {
      index: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kSQ_V8xhlA9H27tp-LCFgPJxgL6-bbh2vA&s",
      offer: "10%",
      name: "Hakka Noodles",
      description: "Stir-fried noodles with veggies in Indo-Chinese style.",
      price: "10",
    },
    {
      index: 12,
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2024/09/GobiManchurian-ad8498d.jpg?quality=90&resize=556,505",
      offer: "5%",
      name: "Gobi Manchurian",
      description: "Crispy cauliflower tossed in spicy Manchurian sauce.",
      price: "9",
    },
    {
      index: 13,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/palak-paneer-recipe.jpg",
      offer: "10%",
      name: "Palak Paneer",
      description: "Spinach and paneer cooked with subtle Indian spices.",
      price: "10",
    },
    {
      index: 14,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPQXFO4B201Ry8o7_Soa7dwhJBrtcwJdE0w&s",
      offer: "15%",
      name: "Chicken Biryani",
      description: "Fragrant rice layered with spiced chicken and herbs.",
      price: "12",
    },
    {
      index: 15,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji.jpg",
      offer: "20%",
      name: "Pav Bhaji",
      description: "Spiced mashed vegetable curry served with buttered buns.",
      price: "8",
    },
    {
      index: 16,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe.jpg",
      offer: "10%",
      name: "Veg Korma",
      description: "Mixed vegetables in a rich and creamy coconut curry.",
      price: "10",
    },
    {
      index: 17,
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
      offer: "25%",
      name: "Tandoori Chicken",
      description: "Chicken marinated in spices and grilled in a clay oven.",
      price: "11",
    },
    {
      index: 18,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/960px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
      offer: "5%",
      name: "Aloo Paratha",
      description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
      price: "7",
    },
    {
      index: 19,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvYe10xwM-YcKB5jf_T0pPYJDFhBuhQCw3A&s",
      offer: "15%",
      name: "Samosa",
      description: "Crispy pastry filled with spicy potato and peas mixture.",
      price: "5",
    },
    {
      index: 20,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGprnId_Ykr5g4UC0FmCND-t9y5dD6B1acA&s",
      offer: "10%",
      name: "Paneer Tikka",
      description: "Grilled paneer cubes marinated in yogurt and spices.",
      price: "10",
    },
  ],
  search: [],
  onSearch: (text) =>
    set((state) => {
      const filtered = state.foodList.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      return {
        search: text ? filtered : state.foodList,
      };
    }),
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
  deleteCart: () => set(() => ({ cart: [] })),
}));
// inc: (id) => set((state) => state.cart.filter((item) => (item.index = id)));
