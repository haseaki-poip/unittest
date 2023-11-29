import { add, RangeError, sub } from ".";

// 型注釈などでは補えない制約などは例外処理を細かく入れていく
// testではその例外処理がしっかり行えているかtest項目として入れる

describe("四則演算", () => {
  describe("add", () => {
    test("返り値は、第一引数と第二引数の「和」である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
    // 例外処理が機能しているかのテスト
    test("引数が'0〜100'の範囲外だった場合、例外をスローする", () => {
      const message = "入力値は0〜100の間で入力してください";
      expect(() => add(-10, 10)).toThrow(message);
      expect(() => add(10, -10)).toThrow(message);
      expect(() => add(-10, 110)).toThrow(message);
    });
  });
  describe("sub", () => {
    test("返り値は、第一引数と第二引数の「差」である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
    // 派生クラスでも例外処理のテストを行える
    test("引数が'0〜100'の範囲外だった場合、例外をスローする", () => {
      expect(() => sub(-10, 10)).toThrow(RangeError);
      expect(() => sub(10, -10)).toThrow(RangeError);
      // スーパークラスでの確認はしないほうがいい。
      // 派生クラスを作成しており明確にその派生クラスによるErrorを期待しているためRangeErrorとするべき
      expect(() => sub(-10, 110)).toThrow(Error);
    });
  });
});
