# Loop

- `let index = 0;` initialization
- `index < array.length;` condition
- `index++` -> afterthought
- 0 -> 99 = 1 -> 100 đều ra kết quả là 100
- _forEach_, _for...of_ khá tương tự nhau và dùng để duyệt theo chiều xuôi(trái -> phải), chứ không theo chiều ngược lại như vòng lặp for thường hay while
- _while_: kiểm tra điều kiện trước khi thực hiện
- _do...while_: thực hiện xong ít nhất 1 lần rồi mới kiểm tra điều kiện
- _for_: dùng nhiều, có thể dùng đảo ngược tùy theo yêu cầu bài toán
- _break_ khi sử dụng trong vòng lặp `for` thì sẽ dừng và thoát khỏi vòng lặp for ngay lập tức
- _continue_ thì nó sẽ bỏ qua giá trị tùy thuộc vào điều kiện bạn viết và tiếp tục vòng lặp
- vòng lặp for có thể lồng nhau(nested)
- vòng lặp có thể duyệt qua những thứ lặp được như mảng, chuỗi, NodeList(DOM)
- có nhiều cách giải quyết với vòng lặp for, tùy thuộc vào tư duy mỗi người, có thể luyện ở leetcode hoặc freecodecamp
- trong vòng lặp for, initialization, condition và afterthought là không bắt buộc
- nên có điều kiện dừng để tránh vòng lặp vô tận(crash máy)

# Array

- Khai báo: `new Array(4)` `[1,2,3,4]`
- Mảng được đánh số từ 0(index)
- Độ dài của mảng dùng `.length`, chạy từ 1
- Các phần tử được ngăn cách nhau bởi dấu phẩy, các phần tử có thể là các kiểu dữ liệu khác như number, boolean, string, null, undefined hoặc thậm chí là 1 mảng khác
- _map_ là phương thức duyệt qua các phần tử trong mảng và nó sẽ tạo ra mảng mới dựa vào điều kiện ở function và không ảnh hưởng tới mảng gốc
- _forEach_ cũng duyệt qua các phần tử trong mảng, forEach không có return
- _sort_ dùng để sắp xếp các phần tử trong mảng theo chuẩn UTF-16, nó sẽ thay đổi luôn mảng gốc(cẩn thận khi sử dụng)
- a > b ? `1` : `-1` -> 1(con số lớn hơn 0): sắp xếp tăng dần, -> -1(con số nhỏ hơn 0): sắp xếp giảm dần, 0 nó sẽ giữ nguyên
- `a - b`: sắp xếp tăng dần, `b - a` : sắp xếp giảm dần
- _push_ là phương thức dùng để thêm phần tử vào cuối mảng
- _unshift_ là phương thức dùng để thêm phần tử vào đầu mảng
- _pop_ dùng để xóa phần tử cuối, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _shift_ dùng để xóa phần tử đầu, khi dùng nó mình có thể lưu giá trị bị xóa vào biến
- _some_ nó sẽ trả về `true` nếu có ít nhất 1 điều kiện đúng, ngược lại trả về `false`
- _every_ nó sẽ trả về `true` nếu tất điều kiện đều đúng, ngược lại là `false`
- _find_ nó sẽ trả ra phần tử thỏa mãn điều kiện nào đó, nếu không thỏa mãn nó sẽ trả ra `undefined`
- _findIndex_ nó sẽ trả ra `index` của phần tử nếu thỏa mãn điều kiện, ngược lại là -1
- _reverse_ đảo ngược mảng, nó ảnh hưởng tới mảng gốc
- _filter_ tạo ra mảng mới, duyệt qua các phần tử trong mảng và lọc ra những phần tử thỏa mãn điều kiện nào đó
- _includes_ kiểm tra phần tử có tồn tại trong mảng hay không ?
- _concat_ dùng để gộp mảng
- _join_ dùng để nối các phần tử trong mảng lại với nhau thông qua separator(nếu có)
- _Array.isArray(value)_ kiểm tra value có phải là mảng hay không?
- _slice_ dùng để sao chép các phần tử trong mảng ra mảng mới mà ko thay đổi mảng gốc
- _slice(start, end)_ -> dùng để sao chép mảng, nó sẽ lấy từ vị trí `start` tới `end-1`, giá trị `end` và `start` là không bắt buộc
- Nếu không truyền `start` và `end` vào thì nó sẽ sao chép nguyên mảng
- Nếu `end` là `-1` thì nó sẽ hiểu là vị trí cuối cùng của mảng
- Nếu start và end bằng nhau thì nó sẽ trả ra mảng rỗng ""
- Nếu start > end thì cũng trả ra mảng rỗng
- Nếu end là số âm thì chúng ta có công thức là độ dài của mảng - giá trị tuyệt đối của end
- _splice_ dùng để thêm hoặc xóa phần tử trong mảng, nó thay đổi mảng gốc, nếu gán nó vào biến và thực hiện chức năng xóa thì nó sẽ trả ra mảng chứa phần tử bị xóa
- _at_ trả ra giá trị ở vị trí index trong mảng, -1 là phần tử cuối cùng
- _toString()_ convert mảng thành chuỗi
- _reduce_ gom các phần tử trong mảng lại làm 1, thường gặp khi làm tính tổng các số trong mảng, hoặc nối chuỗi
- _JSON.parse(JSON.stringify(originalList))_ dùng để sao chép một mảng phức tạp, có nhiều mảng lồng nhau
- Sao chép mảng 1 cấp thì dùng Array.from, slice() hoặc spread operator
- _join(value)_ -> dùng để biến mảng thành chuỗi dựa vào value truyền vào, ngược lại với split
- _reverse()_ -> đảo ngược mảng
- Khi thực hiện 1 phương thức nào đó mà sợ ảnh hưởng tới mảng gốc, mà không nhớ phương thức đó có ảnh hưởng hay không thì tốt nhất là nên sao chép mảng(slice, spread operator) rồi mới xử lý
- lastIndexOf
- findLastIndex
- flat
- fill
- Destructuring
- Rest parameters
- [1,2,3,4,5,6]
- Big O Notation
- Time Complexity