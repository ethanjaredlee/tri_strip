# tri_strip

## Motivation
I'm taking EECS 351 - Intro to computer graphics - and we're learning about breaking down complicated shaped into triangles.
Basically to save memory of recording vertices, there's something called triangle_strip where each new point you add creates a triangle with the last two vertices used.
And then one concept that's important is the idea of backfacing triangles because they can usually be ignored while rendering to save processing time (something I learned
in game design not this class), but nevertheless they are important to keep track of. 
Our latest assignment was to draw complex shapes with triangle strip keeping in mind which sides are backfacing or not. I made this really quick as a visual aid to better help
myself, my classmates, or whoever else wants to use it test their designs. 

... and I also wanted a study break because I was frustrated. 

Cheers!

### TODO?
Maybe if I get time later I'll start checking these off
* making the rotate in 3d?
* add coodinate system
* automatically try to align points
* show path of selected vertices