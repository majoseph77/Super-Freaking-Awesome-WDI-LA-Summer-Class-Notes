#Schedule

- HW review

- Function Drils

- DOM manipulation & events

- Weekend Lab


#Lesson Objectives

- Clearly differentiate btwn when to use `console.log` and `return`.

- Explain what `var` does.

- Explain the difference between calling fx's and referencing fx's.


#Commands

- `Cmd + H` hides a window

-`Cmd +K + D` hides sublime menu

-`Cmd + W` closes window


#Notes
##Explain the difference between calling and referencing fx's

- When you declare a function think of them as another datatype
EX: var func1 = functon(){} is a function assignment

- Ex: function func2() {} is a function declaration

- Function assignment and fx declaration basically do the same thing
* were storing an algorithim and assigning attributes inside the {}
were saying this is how it runs and in the return
 statement were stating what comes out on the other side

 - to declare a function the syntax is ` function func()`
 -to call a fx we say `func1()`


/////////////////////////////////////////////////////////////////



 #Stanleys Lesson Objectives

 - Intro to DOM manipulation

  - Draw DOM Structure

  - Use document method to access elements

  - manipulate elements using js


  # In class notes

  - DOM: Document Object Model
    definition: The Document Object Model (DOM) is an application programming
    interface (API) for valid HTML and well-formed XML documents.
    It defines the logical structure of documents and the way a document
    is accessed and manipulated.

  - Your DOM is rendered by the browser

  - document is an object

  - document.getElementById is used to access an element within the document object
  just like using an object. just like using person.name
  to access the variable name in the object person.

  - the HTML is not the DOM. HTML is the syntax used to define the structure.
  The HTML is turned into a DOM by a browser.

- `document.querySelector('.activate').onclick = function(){
  alert("hi");
}`
- when using this if you have more than one class its only going to apply
to the first one
