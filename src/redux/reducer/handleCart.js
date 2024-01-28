const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const handleCart = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const itemInCart = state.find((item) => item.id === product.id);
      if (itemInCart) {
        const newState = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        localStorage.setItem(
          "cart",
          JSON.stringify(
            newState.map((item) => ({ id: item.id, qty: item.qty }))
          )
        );
        return newState;
      } else {
        const newState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
        localStorage.setItem(
          "cart",
          JSON.stringify(
            newState.map((item) => ({ id: item.id, qty: item.qty }))
          )
        );
        return newState;
      }

    case "DELITEM":
      const itemInCart1 = state.find((item) => item.id === product.id);
      if (itemInCart1.qty === 1) {
        const newState = state.filter((item) => item.id !== itemInCart1.id);
        localStorage.setItem(
          "cart",
          JSON.stringify(
            newState.map((item) => ({ id: item.id, qty: item.qty }))
          )
        );
        return newState;
      } else {
        const newState = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
        localStorage.setItem(
          "cart",
          JSON.stringify(
            newState.map((item) => ({ id: item.id, qty: item.qty }))
          )
        );
        return newState;
      }

    case "ADD_QUANTITY":
      const newStateAdd = state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(
          newStateAdd.map((item) => ({ id: item.id, qty: item.qty }))
        )
      );
      return newStateAdd;

    default:
      return state;
  }
};

export default handleCart;
