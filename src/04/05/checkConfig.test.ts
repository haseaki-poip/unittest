import { checkConfig } from "./checkConfig";

test("モック関数は実行時引数のオブジェクト検証ができる", () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith({
    mock: true,
    feature: { spy: true },
  });
});

// オブジェクトや配列の場合でも部分検証が可能
test("expect.objectContaining による部分検証", () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith(
    // 3章と同じくexpectを使用し検証できる
    expect.objectContaining({
      feature: { spy: true },
    })
  );
});
