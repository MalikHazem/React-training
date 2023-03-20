import Item from "../item/item.componant";

const GenreComponant = (props) => {
  return (
    <>
      {props.arr.map((e) => {
        return <Item e={e} key={e.id} />;
      })}
    </>
  );
};
export default GenreComponant;
