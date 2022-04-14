// this is part of a tutorial, doesn't do anything to the page
type Place = "home" | "work" | { custom: string };

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
  place?: Place;
}>;

type CompletedTodo = Todo & { readonly done: true };

const data: Todo[] = [
  { id: 1, text: "First todo", done: false, place: "home" },
  { id: 2, text: "Second todo", done: false, place: "work" },
  { id: 3, text: "Third todo", done: false, place: { custom: "Gym" } },
  { id: 4, text: "Fourth todo", done: false },
];

function toggleTodo(todo: Todo): Todo {
  return {
    ...todo,
    done: !todo.done,
  };
}

function completeAll(todos: readonly Todo[]): readonly CompletedTodo[] {
  return todos.map((todo) => ({ ...todo, done: true }));
}

function placeToString(place: Place): string {
  if (place === "home") {
    return "Home";
  } else if (place === "work") {
    return "Work";
  } else {
    return place.custom;
  }
}

export {};
