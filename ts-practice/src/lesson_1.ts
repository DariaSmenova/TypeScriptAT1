class User {
    public userName: string; 
    private surname: string; 
    protected age: number;   
  
    constructor(userName: string, surname: string, age: number) {
      this.userName = userName;
      this.surname = surname;
      this.age = age;
    }
  
    public setAge(age: number): void {
      this.age = age;
    }
  
    public getAge(): number {
      return this.age;
    }
  }

  const john = new User('John', 'Doe', 35);

  
console.log(john.userName); 
// console.log(john.surname); // ошибка: private
// console.log(john.age);     // ошибка: protected
console.log(john.getAge());  

  