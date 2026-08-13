import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("korzinka")) || [];
    });

    const addToCart = (item) => {
        setCart((oldCart) => {
            const mavjud = oldCart.find((c) => c.id === item.id);

            let yangiCart;

            if (mavjud) {
                yangiCart = oldCart.map((c) =>
                    c.id === item.id
                        ? { ...c, quantity: (c.quantity || 1) + 1 }
                        : c
                );
            } else {
                yangiCart = [...oldCart, { ...item, quantity: 1 }];
            }

            localStorage.setItem("korzinka", JSON.stringify(yangiCart));
            return yangiCart;
        });
    };

    const removeFromCart = (id) => {
        setCart((oldCart) => {
            const yangiCart = oldCart.filter(
                (item) => String(item.id) !== String(id)
            );
            localStorage.setItem("korzinka", JSON.stringify(yangiCart));
            return yangiCart;
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((oldCart) => {
            const yangiCart = oldCart.map((item) =>
                String(item.id) === String(id)
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            );
            localStorage.setItem("korzinka", JSON.stringify(yangiCart));
            return yangiCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("korzinka", JSON.stringify([]));
    };

    const cartCount = cart.reduce((jami, item) => jami + (item.quantity || 1), 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                cartCount,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
