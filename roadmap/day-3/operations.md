# Arithmetic Operators: ++ -- + - \* / %

- % tức là chia lấy dư ví dụ `10 % 3` -> 1
- ++ tăng đơn vị lên 1 -> counter++, ++counter
- `counter++` gán trước và tăng sau
- `++counter` tăng trước và gán sau
- -- giảm giá trị xuống 1 -> counter--, --counter
- `counter--` gán trước và giảm sau
- `--counter` giảm trước và gán sau
- Để tăng nhiều đơn vị theo cộng/trừ dồn

# Assignment Operators: = += -= \*= /=

```js
let counter = 0;
counter += 5;
counter -= 5;
counter *= 5;
counter /= 5;
```

# Comparison Operators: > < >= <= ===

- Trả ra đúng hoặc sai để thường sử dụng trong câu điều kiện

```js
console.log(5 > 10); // false
console.log(5 < 10); // true
console.log(5 === 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
console.log(10 !== 10); // false
```

```js
const number1 = 5;
const number2 = 10;
const total = () => 7;
console.log(total() > number2); // false
console.log(number1 < number2); // true
console.log(number1 === number2); // false
console.log(number2 >= number2); // true
console.log(number2 <= number2); // true
```

# Logical Operators: && || !

- Trả ra đúng hoặc sai để thường sử dụng trong câu điều kiện
- `!` là phủ định, nếu giá trị là `true` thì sẽ biến thành `false`, ngược lại nếu giá trị là `false` thì sẽ biến thành `true`
- `&&` nó sẽ chạy từ trái sang phải nếu tất cả là truthy value thì sẽ lấy giá trị truthy cuối cùng
- Ngược lại nếu đụng 1 giá trị nào đó là falsy(0, false, null, undefined, NaN) thì sẽ lấy giá trị đó
- `||` nó cũng chạy từ trái sang phải nếu tất cả là truthy thì nó sẽ lấy thằng đầu tiên
- Nếu gặp giá trị truthy thì nó sẽ lấy giá trị đó
