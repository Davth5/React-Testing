import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Chef Boyardee can add and see multiple recipes", async () => {
  render(<App />);

  const addMultipleRecipes = async (name, instructions) => {
    const addButton = await screen.findByRole("button", { name: "Add Recipe" });
    userEvent.click(addButton);

    const recipeNameBox = await screen.findByRole("textbox", {
      name: /Recipe name/i,
    });
    userEvent.type(recipeNameBox, name);

    const instructionsBox = await screen.findByRole("textbox", {
      name: /instructions/i,
    });
    userEvent.type(instructionsBox, instructions);

    const submitButton = await screen.findByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);
  };

  await addMultipleRecipes("Recipe 1", "Instructions for Recipe 1");
  await addMultipleRecipes("Recipe 2", "Instructions for Recipe 2");

  expect(await screen.findByText("Recipe 1")).toBeInTheDocument();
  expect(
    await screen.findByText("Instructions for Recipe 1")
  ).toBeInTheDocument();
  expect(await screen.findByText("Recipe 2")).toBeInTheDocument();
  expect(
    await screen.findByText("Instructions for Recipe 2")
  ).toBeInTheDocument();
});

