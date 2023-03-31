import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";
 
test("ボタンをクリックするとON/OFFの表示が切り替わる", () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  userEvent.click(simpleButton);
  expect(simpleButton).toHaveTextContent("ON");
});