## Selectors

- `document.querySelector(selector)` -> selectors là những selectors đã học ở CSS ví dụ như header, h1, .heading, #content, data-name, a[href^="https"], trả ra 1 element nếu tồn tại, nếu không tồn tại thì sẽ trả ra `null`
- Nếu dùng querySelector cho nhiều phần tử thì nó chỉ trả ra cái đầu tiên
- `document.documentElement` -> Toàn bộ html
- `document.body` -> thẻ body
- `document.querySelectorAll(selector)` -> 1 danh sách các NodeList(cơ bản giống mảng, nhưng ko phải mảng, có thể sử dụng vòng lặp for, forEach nhưng không sử dụng được các phương thức khác của mảng ví dụ map, filter, some, reduce...)
- Chuyển NodeList thành mảng thì sử dụng Array.from(NodeList), [...NodeList]
- `document.getElementsByClassName(className)` -> className không cần dấu chấm ví dụ .header thì viết là `header` là được
- Trả ra HTMLCollections
- `document.getElementsByTagName("div")` -> Lấy ra toàn bộ các elements theo tag(div, b, strong, span)
- `document.getElementById("header")` -> Lấy ra element theo ID

## attributes

- `dom.getAttribute("attribute")` -> Lấy ra giá trị của thuộc tính attribute(`class`)
- `dom.setAttribute("attribute", "value")` -> Thiết lập giá trị cho thuộc tính
- `dom.removeAttribute("attribute")` -> Xóa thuộc tính đó ra khỏi DOM
- `dom.hasAttribute("attribute")` -> Kiểm tra element đó có thuộc tính nào đó hay không ? Có -> `true`, ngược lại -> `false`

## content

- Text Nodes -> chữ
- Là nội dung trong thẻ html ví dụ

```html
<div>your content</div>
<div><h2>heading</h2></div>
<div>
  <h2>heading</h2>
  <span></span>
</div>
```

- Những phương thức dưới đây đều có thể gán giá trị cho nó
- `dom.textContent` = 'evondev'
- `dom.textContent` -> trả ra cả khoảng trắng, xuống hàng, đầy đủ trong thẻ đó
- `dom.innerHTML` -> giống textContent nhưng có thêm cả thẻ html nếu có

## class attribute

- Thực hiện những thay đổi về class cho element
- `element.classList.add("classname1", "classname2")` -> Thêm class vào dom
- `element.classList.remove("class name")` -> Xóa class khỏi dom
- `element.classList.contains("class name")` -> Kiểm tra dom xem có chứa class hay không ?
- element.className = `active gradient`

## create update remove element

- `document.createElement("button")` -> Tạo ra element button
- `parentElement.appendChild(element)` -> dom ở đây là phần tử cha(cũng là dom)
- document.body.appendChild(button) -> xuất hiện 1 dom có tên là button nằm cuối trước thẻ đóng của body
- `DOM.cloneNode(true)` -> dùng để sao chép 1 node nào đó đã có
- `DOM.hasChildNodes()` -> kiểm tra DOM có nodes con hay không ?
- DOM.parentNode.removeChild(DOM) -> dùng để xóa element khỏi DOM Tree
- DOM.remove()

## Insert

- position: `beforebegin`, `afterbegin`, `beforeend`, `afterend`
- `DOM.insertAdjacentText(position, "content")` -> Dùng để chèn chữ vào element theo 4 vị trí(position)
- `DOM.insertAdjacentElement(position, element)` -> Dùng để chèn 1 element khác vào element theo 4 vị trí(position)
- `DOM.insertAdjacentHTML(position, `html structure`)` -> Dùng để chèn nhiều HTML vào element theo 4 vị trí(position)

## Traversing

- Có thể sử dụng nhiều lần ví dụ: element.parentNode.parentNode
- `DOM.parentNode` -> Trả ra phần tử cha
- `DOM.parentElement` -> Trả ra phần tử cha
- `DOM.previousElementSibling` -> Trả ra element đứng trước DOM
- `DOM.nextElementSibling` -> Trả ra element đứng sau DOM
- `DOM.previousSibling` -> Trả ra element đứng trước DOM(bao gồm cả text Node)
- `DOM.nextSibling` -> Trả ra element đứng sau DOM(bao gồm cả text Node)
- `DOM.firstElementChild` -> Trả ra element con đầu tiên
- `DOM.lastElementChild` -> Trả ra element con cuối cùng
- `DOM.firstChild` -> Trả ra element con đầu tiên, lưu ý là có text Node
- `DOM.lastChild` -> Trả ra element con cuối cùng, lưu ý là có text Node
- `DOM.children` -> Trả ra danh sách HTML Elements
- `DOM.childNodes` -> Trả ra danh sách các nodes(NodeList)

## Offset

- offset tính cả border
- `DOM.offsetHeight` -> Trả ra chiều cao của Element
- `DOM.offsetWidth` -> Trả ra chiều rộng của Element
- `DOM.offsetTop` -> Trả ra khoảng cách của Element so với body phía trên
- `DOM.offsetLeft` -> Trả ra khoảng cách của Element so với body bên trái

## Client

- client không tính border
- `DOM.clientHeight` -> Trả ra chiều cao của Element
- `DOM.clientWidth` -> Trả ra chiều rộng của Element
- `DOM.clientTop` -> Trả ra khoảng cách của Element so với border top của nó
- `DOM.clientLeft` -> Trả ra khoảng cách của Element so với border left của nó

## Window

- `window.scrollX` -> Khoảng cách của scroll ngang so với bên trái
- `window.scrollY` -> Khoảng cách của scroll dọc so với bên trên
- `window.innerWidth` -> Độ rộng của màn hình máy tính(viewport width, có khi thay đổi do debug tool hiện thị lên)
- `window.outerWidth` -> Độ rộng của màn hình
- `window.innerHeight` -> Chiều cao của màn hình(viewport width, có khi thay đổi do debug tool hiện thị lên)
- `window.outerHeight` -> Chiều cao của màn hình
- `window.screenX` -> Vị trí của window so với màn hình theo chiều ngang
- `window.screenLeft` -> Vị trí của window so với màn hình theo chiều ngang
- `window.screenY` -> Vị trí của window so với màn hình theo chiều dọc
- `window.screenTop` -> Vị trí của window so với màn hình theo chiều dọc

## getBoundingClientRect

- Trả ra tọa độ của phần tử
- DOM.getBoundingClientRect()

## style

- element.style.cssProperty
- cssProperty -> color, backgroundColor

# DOM - Document Object Model

- `document.body.scrollHeight` -> trả ra chiều cao của body bao gồm cả scroll
- `window.location` -> 1 object chứa nhiều thông tin domain
