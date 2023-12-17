type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Agreement = ({ onChange }: Props) => {
  return (
    // fieldsetはformの入力項目をグループ化する
    // tabでフィールド間を移動できるようになる
    // fieldsetではなくdivでやってしまうとdivはロールを持たないため
    // test時にひとまとまりのグループとして認識できない
    // またアクセシビリティツールで認識できなくなるためUXが良くない
    <fieldset>
      <legend>利用規約の同意</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        当サービスの<a href="/terms">利用規約</a>を確認し、これに同意します
      </label>
    </fieldset>
  );
};
