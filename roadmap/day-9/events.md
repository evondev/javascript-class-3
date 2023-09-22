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
