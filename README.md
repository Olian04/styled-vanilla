# styled-vanilla
[Styled components](https://www.styled-components.com/) without react.

```js
const { styled } = require('styled-vanilla');
const Button = styled.button`
  color: ${args => args.inverted ? 'skyblue' : 'orangered'};
  height: 30px;
  margin-right: 5px;
  
  &:active {
    color: ${args => args.inverted ? 'orangered' : 'skyblue'};
  }
  &::before {
    content: '--> '
  }
  &::after {
    content: ' <--'
  }
`;


const elem1 = Button();
const elem2 = Button({ inverted: true });

elem1.innerText = 'Click me!';
elem2.innerText = 'Click me!';

document.body.append(elem1);
document.body.append(elem2);

const styles = styled();
document.body.append(styles);
```

## Installation

__NPM:__

[`npm install styled-vanilla`](https://www.npmjs.com/package/styled-vanilla)

__CDN:__

```html
<script src="https://unpkg.com/styled-vanilla/web/index.js"></script>
```

## WIP

Props + Psuedo selector + Children array: https://jsfiddle.net/ep319hnt/32/
