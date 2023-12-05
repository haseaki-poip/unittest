import { greetByTime } from ".";

describe("greetByTime(", () => {
  // このdescribeないのテストで共通することをテスト前に処理する
  beforeEach(() => {
    // 偽のタイマーを設定できるようにする
    jest.useFakeTimers();
  });

  // テスト後に処理する関数
  afterEach(() => {
    // タイマーの設定を破棄
    jest.useRealTimers();
  });

  test("朝は「おはよう」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });

  test("昼は「こんにちは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });

  test("夜は「こんばんは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
