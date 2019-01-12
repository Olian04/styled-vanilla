# styled-vanilla
[Styled components](https://www.styled-components.com/) without react

```js
const myBtn = styled.button`
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


const elem1 = myBtn();
const elem2 = myBtn({ inverted: true });

elem1.innerText = 'Click me!';
elem2.innerText = 'Click me!';

document.body.append(elem1);
document.body.append(elem2);

const styles = styled();
document.body.append(styles);
```


## WIP

Props + Psuedo selector demo: https://jsfiddle.net/y9doga8n/10/

~~Props demo: https://jsfiddle.net/sk5m3egr/69/~~

~~Psuedo selector demo: https://jsfiddle.net/sk5m3egr/186/~~
