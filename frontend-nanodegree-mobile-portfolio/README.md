## Website Performance Optimization portfolio project

# To run the project simply open index.html and you'll find the link to pizza.html there

To achieve a page score of 97/100 for Desktop users and 95/100 for Mobile users the following changes were made:

1. A media query "print" was added to print.css to keep the css file from being loaded unless the page was being printed
2. Style.css was commented out and I put the css from the file inline in the HTML document. This allowed for faster loading of the page as the document didn't need to render an extra file.
3. All javascript files and the (google analytics script within the <script></script> tags) were moved to the bottom of the page to promote faster loading
4. Minified the HTML document
5. Optimized profilepic.jpg


To optimize FPS in pizza.html the following changes were made:

1. I removed var pizzasDiv = document.getElementById("randomPizzas"); from the loop so the function does not get called over and over again.
2. I modified the changePizzaSizes function to call queryselector once (outside of the loop) and removed the equations and variables from the loop as they don't need to be calculated every step through the loop.
3. Updated the generation of the sliding pizzas on page load to only display pizzas based on the available screen height

After the changes were made the page refreshed and rendered faster

Resource used to find screen.availHeight

http://www.javascriptkit.com/howto/newtech3.shtml

Resource used to learn about backface-visibility:hidden for hardware acceleration

http://www.w3schools.com/cssref/css3_pr_backface-visibility.asp

Review of getElementsByClassName in mozilla documentation

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
