import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("タイトルの表示", () => {
  render(<ArticleList items={items} />);
  expect(screen.getByRole("heading", { name: "記事一覧" })).toBeInTheDocument();
});

test("items の数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  // getAllByRoleは概要する要素全てをが配列として取得
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("items の数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  // roleのlistとはul要素のことである
  const list = screen.getByRole("list");
  // ul要素があるかどうか
  expect(list).toBeInTheDocument();
  // テスト対象ではないli要素を含まないように対象のul要素からliについて絞ってテスト
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("一覧アイテムが空のとき「投稿記事がありません」が表示される", () => {
  render(<ArticleList items={[]} />);
  // getByRoleを使用するとエラーが出てしまいテストが中断される
  // queryByRoleは存在しないものに対して要素を取得しようと試みることができる
  // そのためエラーで中断されずに要素がないことの確認テストができる
  // queryByRoleの返り値の方はHTMLElementまたはnullとなっていて存在しないことも許容していることがわかる
  // 逆にgetByRoleはHTMLElementのみで許容していないことがわかる
  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText("投稿記事がありません")).toBeInTheDocument();
});

test("Snapshot: items の数だけ一覧表示される", () => {
  const { container } = render(<ArticleList items={items} />);
  expect(container).toMatchSnapshot();
});
