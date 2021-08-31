const Button = () => {
  const clickbutton = () => {
    throw new Error("this is Error");
  };

  return <button onClick={clickbutton}>Click me</button>;
};

export default Button;
