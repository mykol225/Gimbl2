trying to figure out how to use props to dynamically bring an SVG into the <IconLabel /> component.

Context: you are using a Gatsby plugin that makes all SVGs in the /assets folder into usable components. Then you are importing those into iconLabel... but how do you do it with props?

Problem: The app will display 100 or more icons an any given time. How do I make a single component that will display the correct SVG and it's styles? I assume I'd want to have a single Icon component that takes in props for which svg to display and in what color.
