const fnAsync = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => resolve("Async!!"), 2000)
        : reject(new Error("Error!"));
    });
  };
  
  const AnotherFn = async () => {
    // la funcion espera a que se termine de ejecutar something
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
  };
  
  console.log("Before");
  AnotherFn();
  console.log("After");
  