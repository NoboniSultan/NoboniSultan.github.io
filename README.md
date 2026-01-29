## Reflection Questions

### 1. Share one technical concept that you developed greater mastery over in this project. Demonstrate how you understand that concept by sharing your mental model of the concept. Then, show how you used that concept in your project.

One technical concept I developed greater mastery over in this project is CSS layout using **Flexbox**, **Grid**, and **transforms**.\
My mental model of layout is that the parent container controls how its children behave. If I want things in a row or column, I use **Flexbox**. If I want things in rows and columns at the same time, I use **Grid**. Transforms allow me to move or animate elements visually without breaking the layout.\
I used this concept throughout my project. For example:
- I used Flexbox in the navigation bar to space items evenly and align them vertically.


- I used CSS Grid in the projects section to create a two-column layout on desktop that changes to one column on mobile.


- I used CSS transforms for hover effects, like slightly moving cards up or scaling buttons, which makes the site feel more interactive without affecting the document flow.


Understanding how layout starts from the parent element helped me debug issues and design the page more intentionally.


### 2. Choose one project requirement that you found challenging and are proud of implementing. Describe what made it challenging and how you were able to implement the requirement by walking through your code as succinctly as possible. Remember that your audience does not know your code nearly as well as you do so you’ll have to break it down in a logical manner for them to quickly understand it.
One project requirement I found challenging and am proud of implementing is making the projects section **responsive** and visually consistent across screen sizes.
At first, the projects looked fine on the desktop but became cramped and messy on smaller screens. This was challenging because I had multiple project cards with images, text, and links that all needed to stay readable.
To solve this, I used **CSS Grid** on the `.projects-grid` container:
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
```
This creates two equal-width columns on larger screens. Then, I added a media query:
```css
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```
This changes the layout to one column on mobile so users can scroll comfortably. Breaking the problem into desktop layout first and then mobile adjustments helped me stay organized and understand how responsive design works in practice.

## 3. How did you leverage AI to assist your development of this project? 
I used AI tools such as **ChatGPT and Google Gemini** as learning and support tools during development.
I mainly used AI to:
Generate boilerplate code for repetitive structures like project cards and form layouts


Ask questions when CSS layouts weren’t behaving as expected


Clarify concepts like sticky vs fixed navigation


For example, I asked Google Gemini how to create a sticky header, and it suggested using `position: sticky`. After testing it, I decided to use `position: fixed` instead because it gave me more predictable behavior with my design and animations. I reviewed each suggestion, modified class names and structure to match my design, and made sure I could explain how every line works. AI helped me learn faster, but the final decisions and implementation were my own.


This project provided me an opportunity to build something with AI assistance. Check out my [AI Usage Document](https://docs.google.com/document/d/1VgtdIisoZQ9Lf1T5dfe8vO7_Eu_LThgyoF8RjxuViJM/edit?usp=sharing) to see how I used AI on this project.