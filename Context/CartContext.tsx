"use client";

import React, { createContext, useState, ReactNode } from "react";
import { getProductData } from "@/db/product";

interface DATA {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  rating: number;
}

interface ITEMS {
  id: number;
  quantity: number;
}

interface CARTPROPS {
  items: ITEMS[];
  getProductQuantity: (id: number) => number;
  addItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalAmount: () => number;
}

export const CartContext = createContext<CARTPROPS>({
  items: [],
  getProductQuantity: () => 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cartProducts, setCartProducts] = useState<ITEMS[]>([]);

  function getProductQuantity(id: number) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity || 0;
    return quantity;
  }

  function addItemToCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id: number) {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((item) => item.id !== id)
    );
  }

  function removeItemFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotalAmount() {
    let totalAmount = 0;

    cartProducts.forEach((item) => {
      const data: DATA | undefined = getProductData(item.id);

      if (data) {
        totalAmount += data.price * item.quantity;
      }
    });

    return totalAmount;
  }

  const contextValue: CARTPROPS = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
