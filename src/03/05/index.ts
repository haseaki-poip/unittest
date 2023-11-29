// Errorクラスの派生クラスを作成し、Errorクラスを分けわかりやすくする
// スローされたerrorはメッセージで分岐して処理を行うよりerrorクラスの種類によって分岐するほうが良さそう
// if (error instanceof RangeError) {
// }
// みたいな感じで
export class RangeError extends Error {}
export class HttpError extends Error {}

function checkRange(value: number) {
  if (value < 0 || value > 100) {
    // 例外処理のメッセージはテストケースをふまえしっかりと明記する。
    // メッセージを他と差別化することで期待した例外処理が行えているかテストで確認できる
    throw new RangeError("入力値は0〜100の間で入力してください");
  }
}

export function add(a: number, b: number) {
  checkRange(a);
  checkRange(b);
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  checkRange(a);
  checkRange(b);
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
