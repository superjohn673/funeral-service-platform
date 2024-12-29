import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/test-utils";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders login form", () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/電子郵件/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/密碼/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /登入/i })).toBeInTheDocument();
  });

  it("shows error message with invalid credentials", async () => {
    render(<LoginPage />);

    await userEvent.type(
      screen.getByLabelText(/電子郵件/i),
      "invalid@example.com"
    );
    await userEvent.type(screen.getByLabelText(/密碼/i), "wrongpassword");
    await userEvent.click(screen.getByRole("button", { name: /登入/i }));

    await waitFor(() => {
      expect(screen.getByText(/登入失敗/i)).toBeInTheDocument();
    });
  });

  it("navigates to home page after successful login", async () => {
    const { history } = render(<LoginPage />);

    await userEvent.type(
      screen.getByLabelText(/電子郵件/i),
      "test@example.com"
    );
    await userEvent.type(screen.getByLabelText(/密碼/i), "password123");
    await userEvent.click(screen.getByRole("button", { name: /登入/i }));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});
