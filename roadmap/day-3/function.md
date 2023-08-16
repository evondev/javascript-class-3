- Function nghĩa là hàm

```js
function functionName(param1, param2, param3) {
  // body code
  return returnvalue;
}
```

- keyword: function, return
- functionName đặt tên theo chuẩn giống như biến
- param1... là tên chúng ta đặt tùy ý, đặt sao cho dễ hiểu, không bắt buộc tùy thuộc vào bài toán
- body code: code của hàm
- returnvalue: giá trị trả về của hàm
- Sau từ khóa return thì code không có ý nghĩa gì cả vì không chạy tới được
- Nếu hàm mà không có return thì mặc định giá trị trả về của hàm sẽ là `undefined`
- Nếu có return nhưng chỉ là như thế này `return;` thì giá trị trả về cũng sẽ là `undefined`
- Khi gọi function (invoke function) `sumOf2Numbers(5, 10)` thì 5 và 10 ở đây gọi là `arguments`

```js
function functionName(param1 = defaultValue1) {}
```

- Arguments sẽ override(đè) lên giá trị mặc định của param
- Có 2 cách thông dụng là function expression và function declaration
- Function declaration sẽ bị hoisting, có thể sử dụng trước khi khai báo

```js
function total(num1, num2) {
  return num1 + num2;
}
```

- Function expression không bị hoisting, không thể sử dụng trước khi khai báo

```js
const total = function (num1, num2) {
  return num1 + num2;
};
```

- Arrow function có 2 cách viết
- Nếu logic chỉ xử lý trên 1 dòng thì có thể viết như dưới đây

```js
const calculateAge = () => 2023 - 1993;
```

- Nếu logic chỉ xử lý nhiều dòng như bình thường

```js
const calculateAge = () => {
  return 10;
};
```
