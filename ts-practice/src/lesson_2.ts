const warehouseWorker = {
    name: 'John',
    shift: 'day',
    tasksCompleted: 42,
    isAvailable: true,
    completeTask(task: string) {
      console.log(`Completed task: ${task}`);
    }
  };


  interface IWorker {
    name: string;
    readonly shift: string;
    tasksCompleted?: number;
    isAvailable: boolean;
    completeTask(task: string): void;
  }
  
  interface IExtendedWorker extends IWorker {
    department: string;
  }
  
  interface ISuperWorker extends IExtendedWorker {
    role: string;
  }
  
  class Worker implements ISuperWorker {
    name: string;
    shift: string;
    isAvailable: boolean;
    department: string;
    role: string;
    tasksCompleted?: number;
  
    constructor(name: string, shift: string, isAvailable: boolean, department: string, role: string) {
      this.name = name;
      this.shift = shift;
      this.isAvailable = isAvailable;
      this.department = department;
      this.role = role;
    }
  
    completeTask(task: string): void {
      console.log(`${this.name} completed: ${task}`);
      this.tasksCompleted = (this.tasksCompleted || 0) + 1;
    }
  }
  
const mike = new Worker('Mike', 'night', true, 'Logistics', 'Manager');
mike.completeTask('Inventory check');
console.log(mike.tasksCompleted);
