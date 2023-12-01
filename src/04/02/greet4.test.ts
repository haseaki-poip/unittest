import { greet, sayGoodBye } from "./greet";

// "./greet"ないの都合の悪い関数のみを置き換えることができる
jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  // greet: jest.requireActual("./greet").greet,
  // ともできる
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
