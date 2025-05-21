interface Container<T> {
    value: T;
  }
  

  function getValue<T>(container: Container<T>): T {
    return container.value;
  }
  
  
  const numberContainer: Container<number> = { value: 42 };
  const stringContainer: Container<string> = { value: "Привет, TypeScript!" };
  const arrayContainer: Container<number[]> = { value: [1, 2, 3] };
  
  console.log(getValue(numberContainer)); // 42
  console.log(getValue(stringContainer)); // "Привет, TypeScript!"
  console.log(getValue(arrayContainer));  // [1, 2, 3]
  