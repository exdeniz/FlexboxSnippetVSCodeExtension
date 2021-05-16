# CSS Flexbox Logic Snippet for VS Code

For a long time I used [postcss-flexbox](https://github.com/archana-s/postcss-flexbox), but it was time to get rid of sugar.

These snippets are based on the same logic that was in postcss-flexbox
For example: 
```
bhml
```
where
```
b - box
h - horizontal
m - middle
l - left
```
and expand to:
```css
.example {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
```

and one more example for vertical-horizontal centering :
```
bvmc
```
where
```
b - box
v - horizontal
m - middle
c - center
```
and expand to:
```css
.example {
    display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
```


# Prefix construction rules
- [b] - Flexbox
  - [h] - horizontal
    - [t] - top
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [m] - middle
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [b] - bottom
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [s] - stretch
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [l] - baseline
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
  - [v] - vertical
    - [t] - top
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [m] - middle
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [l] - left
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [sb] - space-beetwen
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [sa] - space-around
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [se] - space-elenly
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
- [ib] - Inline flexbox
  - [h] - horizontal
    - [t] - top
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [m] - middle
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [b] - bottom
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [s] - stretch
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [l] - baseline
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
  - [v] - vertical
    - [t] - top
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [m] - middle
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [l] - left
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [sb] - space-beetwen
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [sa] - space-around
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
    - [se] - space-elenly
      - [l] - left
      - [r] - right
      - [c] - center
      - [s] - stretch
- [wb] - wrap flexbox
  - [h] - horizontal
    - [t] - top
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [m] - middle
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [b] - bottom
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [s] - stretch
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [l] - baseline
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
  - [v] - vertical
- [wib] - Wrap inline flexbox
  - [h] - horizontal
    - [t] - top
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [m] - middle
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [b] - bottom
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [s] - stretch
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
    - [l] - baseline
      - [l] - left
      - [c] - center
      - [r] - right
      - [sb] - space-beetwen
      - [sa] - space-around
      - [se] - space-elenly
  - [v] - vertical

  ## Credits

  Thanks @archana-s for postcss-flexbox. This plugin saved me a lot of time.