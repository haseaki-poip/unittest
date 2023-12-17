import { useId, useState } from "react";
import { Agreement } from "./Agreement";
import { InputAccount } from "./InputAccount";

export const Form = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();
  return (
    // useIdで一意なIDを生成しformとh2を紐づけることでロールがformのものの名前をh2のものにできる
    // aria-labelledbyに名前にしたい要素のidを入れることでアクセシブルネームとして引用できる
    // test的にもアクセシビリティ的にも良い
    // id部分をハードコーディングするのは良くないためuseIdなどを使用して生成すると良い
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>新規アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  );
};
