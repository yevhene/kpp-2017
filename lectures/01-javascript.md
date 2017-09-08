# 1. Основи

## Основні поняття Крос-платформного Програмування

### Означення

Крос-платформне програмування - це написання коду що може бути виконаний на різних платформах.

Існують різні підходи в залежності від типу мови:
- Для мов що компілюються, основний підход, це перекомпіляція коду для різних платформ (C/C++, Haskell);
- Для мов що інтерпретуються це розповсюдження вихідного коду для його подальшого виконання на цільовій платформі (Ruby, Python). Також можлива попередня компіляція в проміжний код (Java, C#). Але в обох випадках, на цільовій платформі має бути программа-інтерпретатор, спеціально реалізована для цієї платформи.

## Мова JavaScript

### 1. Інструкція (statements)
Один або декілька виразів, що закінчується на ';'. (';' можна опускати але це може іноді призводити до неочікуванних наслідків).

### 2. Прості типи даних
- Число (number) - Цілі та дробові числа представлені одним типом. (Але інтерпретатор їх оброблює окремо). Приклади: `42`, `123.12`;
- Строка (string) - Набір символів, що обмежується одинарними або подвійними лапками. Оскільки подвійні лапки зазвичай використовуються в HTML, заохочується використання одинарних. Приклади: `'Hello1'`, `"Word!"`;
- Логічні (boolean) - Результати логічних операцій. Мають всього два значення: `true` або `false`.

3. variables
    - `var`
4. expressions
5. operators
    - math (`+`, `-`, `*`, `/`, `%`, `**`)
    - bitwise (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`)
    - assignment (`=`, `+=`, `-=`, `/=`, `*=`, `%=`, `**=`, `<<=`, `>>=`, `>>>=`, `&=`, `|=`, `^=`)
    - increment/decrement (`++`, `--`)
    - comparsion (`<`, `>`, `<=`, `>=`, `==`, `!=`, `===`, `!==`)
    - logical (`&&`, `||`, `!`)
      - short circuit
    - conditional (ternary) (`?:`)
    - comma (`,`)
    - unary (`delete`, `typeof`, `void`)
    - relational (`in`, `instanceof`)
6. operator precedence
    - member: `.`, `[]`
    - call / create instance: `()`, `new`
    - negation/increment: `!`, `~`, `-`, `+`, `++`, `--`, `typeof`, `void`, `delete`
    - multiply/divide: `*`, `/`, `%`
    - addition/subtraction: `+`, `-`
    - bitwise shift: `<<`, `>>`, `>>>`
    - relational: `<`, `<=`, `>`, `>=`, `in`, `instanceof`
    - equality: `==`, `!=`, `===`, `!==`
    - bitwise-and: `&`
    - bitwise-xor: `^`
    - bitwise-or: `|`
    - logical-and: `&&`
    - logical-or: `||`
    - conditional: `?:`
    - assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`
    - comma: `,`
7. empty data types
    - `null`
    - `undefined`
8. arrays
9. comments
    - `//`
    - `/*`
10. object
    - `.`
    - `[]`
11. type coercion
    - falsey
      - `""` (empty string)
      - `0`, `-0`, `NaN` (no a number)
      - `null`, `undefined`
      - `false`
    - arrays
    - non commutative
12. conditionals
    - `if`
    - `if..else`
    - `swtich..case`
13. loops
    - `while`
    - `do..while`
    - `for`
    - `break`
    - `continue`
14. function
    - arguments
    - body
    - as data
    - scope
    - hoisting
    - closure
15. OOP
    - `this`
    - prototype
16. Basic Promises
    - `new Promise(resolve, reject)`
    - `then`/`catch`

## Формат JSON

## Література та посилання
- [w3schools (en.)](https://www.w3schools.com/js/default.asp)
