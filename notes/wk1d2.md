
#**Week 01 Day 02 June 23, 2015**
##**Lesson Objectives**

1. Use Sublime to open and edit fies & folders

2. Use sublime to create or delete files & folders

3. Manage settings and packages in Sublime

4. Create the basic structure of an HTML page including neccesary componentsof <head>)

5. Explain the different rules of HTML, CSS, JS

6. Match CSS with HTML elements

7. Use element, class, id selectors

8. Understand specificity calculations


#**Vocabulary**

- Path:

- Elements: Are data that go into an HTML page

- Tags: Refer to the type of data

- Attributes: Extra meta-data written in the style: text = "text"

- bang : !

- pipe: |


#**Git**

1.  Upstream: The instructors repo

2.  Origin: Students repo on github

3.  Local: Students computer version of github

4.  If changes are made on origin/upstream/local you must pull
    before you can push.

5.  Changes can be made by using `git add` then `git commit`

6.  Bash should show "GNU nano" and ask to merge changes.

7.  Once this prompt appears use `ctrl x`



#**Prompts**

1. `ctrl + click` : gives you a menu option

2. `cmd + shft + del` : sends to trash

3. `cmd + shft + P` : in sublime will open package window that gives you
lots of setting options

4. `open .` : opens finder

5. `tree` : gives you a file path of the directory youre in

6. `rm -f 'file'` : removes a file without comp asking questions

7. `-f`: forces whatever the previous command is

8. `-` : the dash character is a flag that gives you different options

9. `mv 'file'` -moves file

10. `mv'file name'/ 'new file name'` : changes file name

11. `cp`: copies a file/dir

12. `ctrl + c`: ends a process

13. `ctrl +d`: ends an application

14. `man`: will give you the manuals to a command it will change your terminal
     mode to "less". "Less" is a text reading mode To exit "less" mode use `q`
    *Ex: `man ls` will give you the manual for list

15. `cmd + opt + ctrl + fn +'number'`: mult screens in subl

16. `cmd + a`: highlights

17. `cmd + /`: comments out code



#**2 types of paths: Absolute & Relative**


  - Absolute Path `/` the root the starting point of your computer.

  - All absolute paths start with `/`

  - Relative Path - everything path that does not start with a `/`

  - 3 Types of relative paths:

    1. `.`  means from here look for " example"
      *Ex: `./` or `space dir` tells the computer to go to that directory.

    2. `. .` takes you to the parent directory
      *Ex: `cd../..` will take you 2 parent directories back

    3. `~` takes you home

#__**Powerful text editors**__
  - vi(m)

  - emacs

  - nano: easiest editor




#**Notes**

*Model View Separation
  - Model: Data

  - View: How it looks & how you interact w/ it
    *Keep data and all of the logic you use to interact with it separate

*Model View Control "the controller is in charger of everything both model and view"
  - Model: Date

  - View: Presentation layer

  - Controller: works with the interaction between "self and view" and "self & model"


  *static webpage has no interaction just HTML and CSS side by side

*Thought process
  *What is the data on this pg?
  *How do we want the data of 2 seperate realms to look

*MVC in webpage
  *Model: HTML
  *View: CSS
  *Control: Javascript

*Metadata: data about data

*Every pg you make must have
  *<!DOCTYPE html>
  *langueage setting Ex: <html lang="en">
  *<head> element
  *<body> where the body of webpg goes
  *<title>
  *<meta> gives extra info about document; <meta charset="UTF-*8">
  *








Examples:

<p class="top-level-paragraph"> Hello</p>
tag Att                         Element closing tag

#Lesson Objectives


  #Notes

  *Id: An individualized things; should only be used for one element use a # sound to call in CSS

  *Class: A group of things; classification; can be used for several different elements use a . to call in CSS
  *HTML tags

  *Specificity Heiarchy
  1. In line styling
  2. Id
  3. Classes/Attributes
  4. HTML tags

*Specifivity calculation
1 box per

#Web Typography
  *Learn the difference between the font & typeface

  *Understand importance of typography

  *Manipulate typographic properties

#Notes
*Font: something that encompassess all of the typefaces and the att. of font
  *style
  *color
  *size
  *weight
  *typeface

*Typeface: what a designer makes


*Serif: fancy elements to a letter

*San Serif: nothing fancy

*monospace: fixed width/ fixed space

#Manipulating typographic properties

*Fallbacks are back up fonts that will appear in case a browser does not read
your default. use commas in between font-family: will change your typface
  *EX: p.sannserif{
  font-family: Arial, Helvetica, sans-serif; under another pg in subl titled
  styles.css linked with href=

*Be uniform throughout if using single quations use throughout. only use quotes
for multi word typefaces

*use brew to become a better typer enter gtypist into terminal

#Pros and Cons of PX
*Pro
  -specificity

*Cons
  - not as responsive

* A better option is to use EM's over pixels because EM's are more
responsive

  -EM's will adopt the default font size of the browser and its entities ie:
  set font size of div, article, parag.

  -rem: only listens to the root (html) default
    *Ex if html setting is 16 px and div setting is 8 px rem wil stay at 16px
    because it only listens to the root


#MediaQuerys (responsive design)
*Point of media query is to be able to adjust for different
 screen sizes/devices. When it detects a different devixe or size media query
 change the size for you by using @media'type'

 Ex:
 @mediaonlyscreenand(max-width:300px)

 *This is a boolean value if the screen is less than 300px it will run

Assignment:

Make a responsive blog (responsive font) so use media querys so when u
change the screen size u cant see the difference in fonts












