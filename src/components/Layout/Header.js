import classes from "./Header.module.css";

const Header = (props) => {
  //cast it to array, easier to map
  const headerItems = Object.entries(props.headerItems);

  const optionClickHandler = (event) => {
    event.preventDefault();

    props.setMainPage(event.target.href);
  };

  return (
    <header className={classes.header}>
      <ul>
        {headerItems.map((itm) => {
          let optionName = itm[0].charAt(0).toUpperCase() + itm[0].slice(1);

          return (
            <li key={itm[0]}>
              <a href={itm[1]} onClick={optionClickHandler}>
                {optionName}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
