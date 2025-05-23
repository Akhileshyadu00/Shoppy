import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // ✅ Add item to cart
  const addToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        toast.info("Increased product quantity");
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        toast.success("Product added to cart");
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Increment quantity
  const incrementQuantity = (itemId) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
    toast.info("Increased product quantity");
  };

  // ✅ Decrement quantity (remove if quantity is 1)
  const decrementQuantity = (itemId) => {
    setCartItem((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    toast.warn("Decreased product quantity");
  };

  // ✅ Remove item entirely
  const removeFromCart = (itemId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
    toast.error("Product removed from cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
