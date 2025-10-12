import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  fireEvent.change(input, { target: { value: "Write tests" } });
  fireEvent.submit(input.closest("form"));
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles a todo's completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", async () => {
  render(<TodoList />);
  const todo = screen.getByText("Build a Todo App");
  const deleteButton = todo.querySelector("button");
  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
