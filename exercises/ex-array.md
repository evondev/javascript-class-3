1. Viết 1 function để tạo ra 1 mảng với với số lượng và chuỗi truyền vào. Ví dụ `repeatValueArr(3, 'a')` trả ra kết quả là mảng như sau: ['a','a','a']
2. Viết 1 function để đảo ngược mảng truyền vào. Ví dụ `reverseArr([1,2,3,4,5])` sẽ có kết quả là [5,4,3,2,1]
3. Viết 1 function để loại ra các phần tử là Falsy Values trong mảng. Ví dụ `removeFalsyArr([0, 1, false, 2, undefined, '', 3, null])` kết quả trả về sẽ là [1,2,3]
4. Viết 1 function để loại ra các phần tử trùng nhau ở trong mảng. Ví dụ `removeDuplicate([1,2,3,1,2,3,4,5])` sẽ có kết quả là [1,2,3,4,5]
5. Viết 1 function để tạo ra 1 mảng mới chứa nhiều mảng con theo số lượng truyền vào. Ví dụ `chunkArr([1, 2, 3, 4, 5], 2)` sẽ có kết quả trả về là [[1, 2], [3, 4], [5]]
6. Viết 1 function chỉ trả ra các số là số chẵn từ mảng. Ví dụ `isEvenArr([13,23,12,45,22,48,66,100])` -> [12,22,48,66,100]
7. Viết 1 function tìm ra số lớn nhất trong mảng. Ví dụ `largestNumber([2, 45, 3, 67, 34, 567, 34, 345, 123])` kết quả là 567
8. Viết 1 function có tên là `capitalize(str)` để biến tất cả chữ thành IN HOA. Ví dụ: capitalize("evondev") có kết quả là EVONDEV
9. Cho 1 mảng đơn giản như sau

```js
const people = [
  { name: "Charlie", age: 28, city: "Chicago" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 32, city: "Los Angeles" },
];
```

9.1 Viết 1 hàm có tên là `filterByAge(people, age)` để trả về 1 mảng những người có độ tuổi lớn hơn 1 giá trị nhất định
9.2 Viết 1 hàm có tên là `sortByNames(people)` để sắp xếp tên người theo thứ tự tăng dần
9.3 Viết 1 hàm có tên là `findPeopleByCity(people, city)` để trả ra đối tượng thuộc thành phố nào đó
9.4 Viết 1 hàm có tên là `deletePeopleById(people, id)` để xóa 1 người nào đó trong mảng people
9.5 Viết 1 hàm có tên là `getAverageAge(people)` để tính ra số tuổi trung bình 10(Khó). Viết 1 hàm có tên là `countLetters(str)` để đếm các kí tự trong chuỗi và trả ra 1 object chứa các từ đó. Ví dụ

```js
countLetters('abbcccddddeeeee');
{a: 1, b: 2, c: 3, d: 4, e: 5}
```

- Gợi ý biến chuỗi thành mảng sử dụng [...str]
- Gợi ý sử dụng `hasOwnProperty` trong Object và phương thức `reduce` trong mảng
