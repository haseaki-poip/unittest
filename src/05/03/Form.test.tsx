import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("名前の表示", () => {
  render(<Form name="taro" />);
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("ボタンの表示", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("ボタンのテキスト取得", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toHaveTextContent("編集する");
});

test("見出しの表示", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("heading")).toHaveTextContent("アカウント情報");
});

test("ボタンを押下すると、イベントハンドラーが呼ばれる", () => {
  // ボタンが押されたときの処理にモック関数としてスパイを入れる。p78, 04-5
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  // スパイから情報を確認
  expect(mockFn).toHaveBeenCalled();
});

test("Snapshot: アカウント名「taro」が表示される", () => {
  const { container } = render(<Form name="taro" />);
  expect(container).toMatchSnapshot();
});

test("logRoles: レンダリング結果からロール・アクセシブルネームを確認", () => {
  const { container } = render(<Form name="taro" />);
  logRoles(container);
});
