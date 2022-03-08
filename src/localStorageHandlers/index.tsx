export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoListState");
    if (serializedState === null) {
      return { todos: [], newTodo: "" };
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const changeLocalStorage = (storedValues: string) => {
  localStorage.setItem("todoListState", storedValues);
};
