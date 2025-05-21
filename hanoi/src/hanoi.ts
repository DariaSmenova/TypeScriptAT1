class Stack<T> {
    private items: T[] = [];
  
    push(item: T) {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    size(): number {
      return this.items.length;
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    print(label: string) {
      console.log(`${label}: [${this.items.join(', ')}]`);
    }
  }
  

  function solveHanoi<T>(
    n: number,
    source: Stack<T>,
    target: Stack<T>,
    auxiliary: Stack<T>,
    moveFn: (from: Stack<T>, to: Stack<T>) => void
  ) {
    if (n === 1) {
      moveFn(source, target);
      return;
    }
  
    solveHanoi(n - 1, source, auxiliary, target, moveFn);
    moveFn(source, target);
    solveHanoi(n - 1, auxiliary, target, source, moveFn);
  }
  

const source = new Stack<number>();
const target = new Stack<number>();
const auxiliary = new Stack<number>();


const diskCount = 4;
for (let i = diskCount; i >= 1; i--) {
  source.push(i);
}

console.log('Начальная конфигурация:');
source.print('Изначальная башня');
target.print('Итоговая башня');
auxiliary.print('Вспомогательная башня');

console.log('\n--- Начинаем перемещения ---\n');

solveHanoi(diskCount, source, target, auxiliary, (from, to) => {
  const disk = from.pop();
  if (disk !== undefined) {
    to.push(disk);
    console.log(`Переместили диск ${disk}`);
  }
});

console.log('\n--- Финальная конфигурация ---');
source.print('Изначальная башня');
target.print('Итоговая башня');
auxiliary.print('Вспомогательная башня');
