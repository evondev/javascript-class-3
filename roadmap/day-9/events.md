# Events

- Click
- Mouse: mousemove, mouseenter, mouseleave, mouseover
- Input: change, keydown, keyup, keypress, input, blur
- Drag
- Scroll
- Load
- Timer
- Touch
- ...

## Cấu trúc

- element.addEventListener("eventName", function(){})

## Click

- `event.stopPropagation()` -> dùng để chặn vấn đề nổi bọt
- `event.preventDefault()` -> dùng để chặn hành vi mặc định của 1 element nào đó
- click -> nhấn
- event.clientX -> trả ra tọa độ của event theo trục X
- event.clientY -> trả ra tọa độ của event theo trục Y
- `event.target`: nó sẽ chọn chính xác element mà mình click tới
- `event.currentTarget`: nó sẽ chọn phần tử mà mình click(phần tử được thêm sự kiện)
- event.target.dataset.name -> dùng để lấy custom attribute ví dụ (data-name)

## Hover

- `mouseenter` -> rê chuột vào phần tử, khá giống hover trong CSS
- `mouseleave` -> rê chuột vào phần tử sau đó rê ra ngoài lại
- `mouseover` -> giống mouseenter và nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
- `mousemove` -> di chuyển chuột ở element
- `mousedown` -> click chuột trái hoặc phải
- `mouseup` -> khi nhấn chuột xong nhả ra

## Portal

- Đưa element ra bên ngoài cùng cấp với body hoặc là nằm trước khi đóng thẻ body
- `window.getComputedStyle(dropdownList)` -> trả ra các styles css của 1 Element nào đó
- Để lấy ra giá trị của thuộc tính nào đó dựa vào getComputedStyle thì dùng `window.getComputedStyle(dropdownList).getPropertyValue("width")`
