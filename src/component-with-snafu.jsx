export const Comp = (props) => {
  const { list } = Props;
  return (
    <div>
      <h1>Hello!</h1>
      {list.length && <span>You have {list.length} items</span>}
    </div>
  );
};
