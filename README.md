# styled-vanilla
[Styled components](https://www.styled-components.com/) without react

```js
const myBtn = styled.button`
  color: orangered;
  height: 30px;
  margin-right: 5px;
  
  &:active {
  	color: skyblue;
  }
  &::before {
  	content: '--> ';
  }
  &::after {
  	content: ' <--';
  }
`;


const elem1 = myBtn();
const elem2 = myBtn();

elem1.innerText = 'Click me!';
elem2.innerText = 'Click me!';

document.body.append(elem1);
document.body.append(elem2);

const styles = styled();
document.body.append(styles);
```


## WIP

Props demo: https://jsfiddle.net/sk5m3egr/69/

Psuedo selector demo: https://jsfiddle.net/sk5m3egr/186/
