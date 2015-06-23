##CSS Selectors and Basic styling
<br />

###Learning Objectives:

#####*By the end of this class, students will be able to...*

- Match CSS selectors to DOM elements
- Style a page's fonts and background colors with CSS - font families - weights and decoration - colors (words, hex, rgba)
- Demonstrate knowledge of the box model by styling the padding, border, and margin of a basic div

###Getting started

	$ mkdir css_selectors css_selectors/css
	$ cd css_selectors
	$ touch index.html css/style.css

####CSS Selectors

CSS selectors allow you to select and manipulate HTML element(s).

CSS selectors are used to "find" (or select) HTML elements based on their: 

- ID 
- Classes 


####Element Selector

The element selector selects HTML elements based on the element name.

**HTML**

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS Specificity</title>

	<style type="text/css">
	
	</style>

</head>

<body>
	<p>Hello world</p>
	<p>Hello class</p>
	<p>Hello Stanley</p>
</body>

</html>
```

**CSS**

```css
p
{
	text-align: center;
	color: #FE2E2E; /* red */
}

```

The code above selects all paragraph element and:

- Center align the text
- Change the text color to red

####The Class Selector

The class selector finds elements with  a specific class.

A class is a group of elements:

- Classes are **NOT** unique
- You can use the same class on multiple elements
- You can use multiple classes on the same element

**HTML**

```html
<div class="comments">
	Hello
</div>

<div class="comments">
	Hello
</div>

<div class="comments">
	Hello
</div>
```

**CSS**

```css
.comments
{
	font-weight: bold;
	color: #64FE2E; /* green */
}
```

**Activity: Write your own css**

	Create 2 section tags with the class of sidenav. Then make the background-color blue and change the font-size


####The ID Selector

The ID selector uses the id attribute of an HTML tag to find a specific element.

- An ID is **unique** within a page. 
- *You should use the id selector when you want to find a single, unique element.*
- In the CSS document, you use a hashtag (#) to denote an ID 

###html

```html

<section id="dolphin">
	I am a dolphin
</section>

```
###CSS

```css
#dolphin
{
	font-style: italic;
	color: #0040FF; /*blue*/	
}
```
		

**Activity**: 

	Explain to the person next to you what the difference between class and ID

**Activity**:

	Make a webpage with a green background, a heading, and two paragraph
	

###The last step: Separation of concerns

Let's move


## You can use both an ID and a class on an element!

	
###Specificity

- Specificity determines, which CSS rule is applied by the browsers.
- Specificity is usually the reason why your CSS-rules don’t apply to some elements, although you think they should.
- Every selector has its place in the specificity hierarchy.
- If two selectors apply to the same element, the one with higher specificity wins.
- There are four distinct categories which define the specificity level of a given selector: inline styles, IDs, classes+attributes and elements.
- You can calculate CSS specificity with CSS Specificity Calculator.

<img src="https://css-tricks.com/wp-content/csstricks-uploads/specificity-calculationbase.png" />

###Calculating specificity

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-1.png' />

*This is calculated as 113*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-2.png' />


*This is calculated as 23*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-4.png' />

*This is calculated as 1000*

###Activity

Make this using html and css using the best practices

<img src='https://upload.wikimedia.org/wikiversity/en/0/0c/Css_challenges_1.png' />

<img src='https://upload.wikimedia.org/wikiversity/en/b/bd/Css1_1.png' />