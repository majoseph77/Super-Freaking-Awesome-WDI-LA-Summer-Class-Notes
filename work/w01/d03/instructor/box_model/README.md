#CSS Box Model

- Understand the CSS box model (margin, border, padding, content)
- Identify the boxes on a public website
- Understand difference between an inline element and block element
- Use float (left / right)
- Utilize static, relative, fixed and absolute positioning

<img src='http://www.w3schools.com/css/box-model.gif' />

###How is the size of the box calculated?

**Width** = width + padding left + padding right + border-left + border-right

**Height** = height + padding top + padding bottom + border-top + border-bottom

###What if the values are undeclared?

If padding or borders are undeclared, they are either zero (likely if you are using a css reset) or the browser default value (probably not zero especially on form elements that are commonly not reset).

###What if the width is undeclared?

If you don't declare a width, and the box has static or relative positioning, the width will remain 100% in width and the padding and border will push inwards instead of outward. But if you explicitly set the width of the box to be 100%, the padding will push the box outward as normal.

###Let's try it out

	$ mkdir box_model box_model/css
	$ cd box_model
	$ touch index.html css/style.css

In `index.html`

```index.html
<html>
<head>
 <title>box_model</title>
 <link rel="stylesheet" type="text/css" href="css/style.css">      
</head>
<body>
 <h1>box_model</h1>
 <div class='box'>
   Hello
 </div>
 <script src='js/main.js'></script>
</body>
</html>
```

In `style.css`

```css

body{
	padding: 0;
	margin: 0;    
}

```

Note that the box on default is 100% wide. 

To prove it, let's do this:

```css
.box{
	background-color: blue;	
}
```

Your box will be blue all the way across

The lesson here being that the default width of a box isn't really 100% but a less tangible "whatever is left". This is particularly valuable to know, since there are lots of circumstances where it is immensely useful to either set or not set a width.

Now, let's change our padding and margin on our box. 

```css

.box{
	background-color: blue;	
	/*This pushed inwards \*/
	padding: 100px;
	margin: 100px;
}

```

Notice how it pushes inwards

Finally, let's go and add width and height to our box

```css

.box{
	background-color: blue;	
	/*This pushed inwards \*/
	padding: 100px;
	margin: 100px;
	width: 100px;
	height: 100px;
}

```

Notice now that it pushes outward from the box now.

###Let's identify boxes on yahoo

[Yahoo](https://www.yahoo.com/)

###The box model is everywhere! It's a integral part of the web

###Inline vs. Block

###Block-level Elements

A block element is an element that has, but may not be limited to, the following characteristics:

- If no width is set, will expand naturally to fill its parent container
- Can have margins and/or padding
- If no height is set, will expand naturally to fit its child elements (assuming they are not floated or positioned)
- By default, will be placed below previous elements in the markup (assuming no floats or positioning on surrounding elements)
- Ignores the vertical-align property

Examples of Block Elements:

```html
<p>, <div>, <form>, <header>, <nav>, <ul>, <li>, and <h1>.
```

###Inline Elements

An inline element has, but may not be limited to, the following characteristics:

- Flows along with text content, thus
- Will not clear previous content to drop to the next line like block elements
- Is subject to white-space settings in CSS
- Will ignore top and bottom margin settings, but will apply left and right margins, and any padding
Will ignore the width and height properties
- If floated left or right, will automatically become a block-level element, subject to all block characteristics
- Is subject to the vertical-align property

```html
Examples of Inline Elements:
<a>, <span>, <b>, <em>, <i>, <cite>, <mark>, and <code>.
```

You can change it by using 

```
li {
    display: inline;
}
```

```
span {
    display: block;
}
```

To center a block use:

```html
<div class='center-block'>
   Centered block
 </div>
```

```css
.center-block{
	width: 100px;
	height: 100px;
	margin: 0 auto;

}
```

To center inline, use:

```html
<div class='center-block'>
   Centered block
   <span>Centered text</span>
</div>
```
```css
.center-block{
	width: 100px;
	height: 100px;
	margin: 0 auto;
	text-align: center;
}
```

Margin is also great for positioning things

###Static, float, relative, and absolute

####Float

Elements are floated horizontally, this means that an element can only be floated left or right, not up or down.

A floated element will move as far to the left or right as it can. Usually this means all the way to the left or right of the containing element.

The elements after the floating element will flow around it.

The elements before the floating element will not be affected.

If an image is floated to the right, a following text flows around it, to the left:

```html

<div class='floated-blocks'>
   Floated blocks
 </div>
 <div class='floated-blocks'>
   Floated blocks
 </div>
 <div class='floated-blocks'>
   Floated blocks
 </div>
 <div class='floated-blocks'>
   Floated blocks
 </div>
```

```css
.floated-blocks{
	width: 100px;
	height: 100px;
	border: 1px solid black;
	float: left;	
}
```

Then float to the right

###Static positioning

This is the default positioning of the web. Everything will flow sequentially the way you have written it.

###Relative positioning

- If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static;
- But if you DO give it some other positioning attribute, say, top: 10px;, it will shift it's position 10 pixels DOWN from where it would NORMALLY be.
- it introduces the ability to use z-index on that element, which doesn't really work with statically positioned elements. 
- The other thing that happens is it limits the scope of absolutely positioned child elements. Any element that is a child of the relatively positioned element can be absolutely positioned within that block. 

```html
<div class='relative-block'>
   I'm relative
 </div>
 ```

```css
.relative-block{
	width: 500px;
	height: 500px;
	position: relative;
	top: 100px;
	border: 1px solid black;
}
```

###Absolute positioning

- This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left bottom and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

```html
<div class='relative-block'>
   I'm relative
   <div class='absolute-block'>
     I'm absolute
   </div>
 </div>
```

```css
.absolute-block{
	position: absolute;
	width: 100px;
	height: 100px;
	top: 10px;
	left: 20px;
	border: 1px solid black;
}
```

###Fixed positioning

- The viewport doesn't change when the window is scrolled, so a fixed positioned element will stay right where it is when the page is scrolled, creating an effect a bit like the old school "frames" days. 

```html
<div class='fixed-block'>
   I'm fixed
 </div>
```

```css
.fixed-block{
	position: fixed;	
	width: 100%;
	height: 100px;
	background-color: blue;
	top: 0;
	left: 0;
}
```

###You now understand CSS positioning!!