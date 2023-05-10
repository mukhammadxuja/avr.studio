const useState = (defaultValue) => {
    // 👆 We create a function useState with a default value
    let value = defaultValue;
    // 👆 We create a local variable value = defaultValue
    const getValue = () => value
    // 👇 We create a function to set the value with parameter newValue
    const setValue = newValue => value = newValue // 👈 We change the value for newValue
    return [getValue, setValue]; // 👈 We return an array with the value and the function
  }
  
  const [counter, setCounter] = useState(0);
  // 👆 We destructure the array as a return of the useState function into two value
  
  console.log(counter()); // 👈 returns 0 which it's the value of counter()