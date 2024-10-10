import { createContext, ReactNode, useContext, useState } from "react";
import { ICart, IProduct } from "../interfaces";

type TOperand = "+" | "-";
type TAction = "add" | "remove" | "clear";

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  cart: ICart;
  updateCart: (action: TAction, product: IProduct, count?: number) => void;
  clearCart: () => void;
}

const cartObj = {
  cartId: 1,
  items: [],
  total: 0,
};

const CartContext = createContext<ICartContext | null>(null);

export function CartContextProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<ICart>(cartObj);

  // Used to clear an item from the cart
  const clearItem = (product: IProduct) => {
    setCart((c) => {
      const cartItem = c.items.find(i => i.item.id === product.id);

      // If no item was found return
      if (!cartItem) return c;

      // Get the new total and get a new array without the cartItem
      const newTotal = c.total - (cartItem.item.price * cartItem.quantity);
      const arr = cart.items.filter((i) => i.item.id !== product.id);

      return {
        ...c,
        items: arr,
        total: newTotal
      };
    });
  };

  // Used to add or remove an item from the cart
  const updateItem = (product: IProduct, operand: TOperand, count = 1) => {
    setCart((c) => {

      // Find the product in the carts list of products
      const item = c.items.find((i) => i.item.id === product.id);

      // If item is already in the items list, else add the product to the cart
      if (item) {

        console.log("setCart updating");
        
        // Calculate the newQuantity, based on the operand and count
        const newQauntity = operand === "+" ? item.quantity + count : Math.max(item.quantity - count, 0);
        
        // Get newTotal based on the total minus old item cost and adding new item cost based on newQuantity
        const price = product.price;
        const newTotal = c.total - (price * item.quantity) + (price * newQauntity);
        
        // Get a new array with an updated cartItem at the specified index
        const index = c.items.indexOf(item);
        const arr = c.items.map((item, i) =>
          i === index ? { ...item, quantity: newQauntity } : item
        );

        return {
          ...c,
          items: arr,
          total: newTotal,
        };
      } else {
        console.log("setCart adding")

        // Add the product to the items list and update the price
        const arr = [...c.items, { item: product, quantity: count }];
        const newTotal = c.total + (product.price * count);

        return {
          ...c,
          items: arr,
          total: newTotal
        };
      }
    });
  };

  // Updates the cart based on provided action
  const updateCart = (action: TAction, product: IProduct, count = 1) => {
    switch (action) {
      case "add": {
        updateItem(product, "+", count);
        break;
      }

      // --- Removing until 0 will still keep the item in the cart ---
      case "remove": {
        updateItem(product, "-", count);
        break;
      }

      case "clear": {
        clearItem(product);
        break;
      }

      default:
        break;
    }
  };

  // Clears all the items from the cart
  const clearCart = () => {
    setCart(c => {
      return {
        ...c,
        items: [],
        total: 0
      }
    })
  };

  return <CartContext.Provider value={{ cart, updateCart, clearCart }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}


