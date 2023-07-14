import PropTypes from 'prop-types';

const newMessage = "David"; //if a piece of code tha is never going to change is outside of the component this means that i will never be rerender when the component is

const newObj = {
  message: "Im an object",
  name: "objOne",
};

const newFunc = (name) => {
    return `Hello Im a function which receives a name, the name is: ${name}` 
};

export function App( { title , subtitle } ) 
{

  console.log(subtitle);

  //this is equivalent to this code : document.createElement....
  return (
    <>
      <h1>Hello World from React!</h1>
      <h2>Fragment component</h2>
      <p>{newMessage}</p>
      <p>{JSON.stringify(newObj)}</p>
      <p>{subtitle}</p>
      <strong>{newFunc(newMessage)}</strong>
      <h1 >This text comes form the props: === </h1><h1 data-testid='testTitle'>{title}</h1>
    </>
  );
}


App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
};  

App.defaultProps  = { //default props will always enter before the propTypes
  title : 'Im a default prop', 
  subtitle : 0,
  name: 'David' //You can create a prop here that can be use inside the component but will never be assing a  value
};