class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Метод расчета годовой зарплаты
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Подкласс Менеджер, который наследуется от Employee
class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    // Переопределение метода расчета годовой зарплаты
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.bonus;
    }
}

// Создание экземпляров класса Менеджер
let manager1 = new Manager('Alice', 5000, 'IT', 10000);
let manager2 = new Manager('Bob', 6000, 'HR', 15000);

// Расчет и вывод годовой зарплаты менеджеров
console.log(`Годовая зарплата менеджера ${manager1.name}: ${manager1.calculateAnnualSalary()}`);
console.log(`Годовая зарплата менеджера ${manager2.name}: ${manager2.calculateAnnualSalary()}`);