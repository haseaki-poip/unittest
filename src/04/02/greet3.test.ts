import { greet, sayGoodBye } from "./greet";

// モックを使用しスタブに置き換える
// "./greet"にあるsayGoodBye関数は未実装であるがスタブに置き換えて動作してるかのようにできる"
jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

// "./greet"にあるsayGoodBye関数はjest.mockないでスタブに置き換えたがgreet関数は置き換えを行なっていないためundefinedとなってしまう
test("挨拶が未実装（本来の実装ではない）", () => {
  expect(greet).toBe(undefined);
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
