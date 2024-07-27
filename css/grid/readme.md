# Properties

```css
.container {
    display: grid;
    grid-template-columns: 0;
    grid-template-rows: 0;
}

/* Different ways to set position in grid. */
.item {
    /* 1 */
    grid-row-start: 0;
    grid-row-end: 0;
    grid-column-start: 0;
    grid-column-end: 0;

    /* 2 */
    grid-row: 0 / 0;
    grid-column: 0 / 0;

    /* 3 */
    grid-row: span 0 / 0;
    grid-column: 0 / 0;

    /* 4 */
    /* Hover using vs code to see docs. */
    grid-area: 0 / 0 / 0 / 0;
}

/* Move element to front of all elements. */
/* Not Grid property API.*/
.item { 
    z-index: 1
}

```

# Tutorials

Learn CSS Grid - A 13 Minute Deep Dive
https://youtu.be/EiNiSFIPIQE
