import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    const addFavorite = (item) => {
        setFavorites((oldFavorites) => {
            const mavjud = oldFavorites.find(
                (fav) => fav.id === item.id
            );

            if (mavjud) {
                return oldFavorites;
            }

            const yangiFavorites = [
                ...oldFavorites,
                item
            ];

            localStorage.setItem(
                "favorites",
                JSON.stringify(yangiFavorites)
            );

            return yangiFavorites;
        });
    };

    const removeFavorite = (id) => {
        setFavorites((oldFavorites) => {
            const yangiFavorites = oldFavorites.filter(
                (item) => item.id !== id
            );

            localStorage.setItem(
                "favorites",
                JSON.stringify(yangiFavorites)
            );

            return yangiFavorites;
        });
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                favoritesCount: favorites.length,
                addFavorite,
                removeFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}