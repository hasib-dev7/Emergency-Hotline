### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   ans :
   getElementById("id") → returns one element with that ID.
   getElementsByClassName("class") → returns live HTMLCollection of all elements with that class.
   querySelector("selector") → returns first element matching CSS selector.
   querySelectorAll("selector") → returns all matching elements as a static NodeList.

2. How do you **create and insert a new element into the DOM**?
   ans:
   Create element: const el = document.createElement("div"); el.innerText = "Hello";
   Select parent: const parent = document.getElementById("parent");
   Insert element: parent.appendChild(el);

3. What is **Event Bubbling** and how does it work?
   ans :
   Event Bubbling: an event on a child element propagates upward to its parent elements in the DOM hierarchy, triggering any matching event listeners on them.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   ans :
   Event Delegation: a technique where a parent element handles events for its child elements using a single listener. It’s useful for dynamic elements and improves performance by reducing multiple listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   ans:
   preventDefault() stops the element’s default action (e.g., form submit, link navigation),
   while stopPropagation() stops the event from bubbling up to parent elements.
