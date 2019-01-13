# styled-vanilla
[Styled components](https://www.styled-components.com/) without react

```js
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


## WIP

Props + Psuedo selector [(Typescript demo)][1] demo: https://jsfiddle.net/y9doga8n/10/

~~Props demo: https://jsfiddle.net/sk5m3egr/69/~~

~~Psuedo selector demo: https://jsfiddle.net/sk5m3egr/186/~~


[1]: https://www.typescriptlang.org/play/#src=const%20hashString%20%3D%20str%20%3D%3E%20%7B%0D%0A%20%20let%20p1%20%3D%202654435761%2C%20p2%20%3D%201597334677%2C%20h1%20%3D%200xdeadbeef%20%7C%200%2C%20h2%20%3D%200x41c6ce57%20%7C%200%3B%0D%0A%20%20for%20(let%20i%20%3D%200%2C%20ch%3B%20i%20%3C%20str.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%09ch%20%3D%20str.charCodeAt(i)%2C%20h1%20%3D%20Math.imul(h1%20%2B%20ch%2C%20p1)%2C%20h2%20%3D%20Math.imul(h2%20%2B%20ch%2C%20p2)%3B%0D%0A%20%20%7D%0D%0A%20%20h1%20%3D%20Math.imul(h1%20%5E%20h1%20%3E%3E%3E%2016%2C%20p2)%2C%20h2%20%3D%20Math.imul(h2%20%5E%20h2%20%3E%3E%3E%2015%2C%20p1)%3B%0D%0A%20%20return%20(h2%20%26%202097151)%20*%204294967296%20%2B%20h1%3B%0D%0A%7D%3B%0D%0A%0D%0Atype%20styledElementConstructor%3CG%3E%20%3D%20%3CT%20extends%20object%3E(consts%3A%20TemplateStringsArray%2C%20...vars%3A%20((args%3A%20Partial%3CT%3E)%20%3D%3E%20string)%5B%5D)%20%3D%3E%20(props%3F%3A%20Partial%3CT%3E)%20%3D%3E%20G%3B%0D%0Ainterface%20IStyled%20%7B%0D%0A%20%20()%3A%20HTMLStyleElement%3B%0D%0A%20%20button%3A%20styledElementConstructor%3CHTMLButtonElement%3E%3B%0D%0A%20%20%5Btag%3A%20string%5D%3A%20styledElementConstructor%3CHTMLElement%3E%3B%0D%0A%7D%0D%0Aconst%20styled%3A%20IStyled%20%3D%20(()%20%3D%3E%20%7B%0D%0A%20%20%2F%2F%20Init%20function%0D%0A%20%20const%20usedClassNames%20%3D%20%5B%5D%3B%0D%0A%20%20const%20styleEl%20%3D%20document.createElement('style')%3B%0D%0A%20%20%0D%0A%09return%20new%20Proxy(()%20%3D%3E%20%7B%0D%0A%20%20%09%2F%2F%20Returns%20reference%20to%20style%20element%0D%0A%20%20%20%20return%20styleEl%3B%0D%0A%20%20%7D%2C%20%7B%0D%0A%20%20%20get%3A%20(_%2C%20tag%3A%20string)%20%3D%3E%20(consts%2C%20...vars)%20%3D%3E%20(props%20%3D%20%7B%7D)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20const%20el%20%3D%20document.createElement(tag)%3B%0D%0A%20%20%20%20%20%20let%20constOffset%20%3D%200%2C%20varOffset%20%3D%200%3B%0D%0A%20%20%20%20%20%20let%20rawStyle%20%3D%20''%3B%0D%0A%20%20%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20consts.length%20%2B%20vars.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20(i%20%25%202%20%3D%3D%3D%200)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20rawStyle%20%2B%3D%20consts%5BconstOffset%2B%2B%5D%3B%0D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20const%20tmp%20%3D%20vars%5BvarOffset%2B%2B%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20if%20(typeof%20tmp%20%3D%3D%3D%20'function')%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20rawStyle%20%2B%3D%20tmp(props)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20rawStyle%20%2B%3D%20tmp%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20const%20className%20%3D%20%60C_%24%7BhashString(rawStyle)%7D%60%3B%0D%0A%20%20%20%20%20%20el.className%20%3D%20className%3B%0D%0A%20%20%20%20%20%20if%20(usedClassNames.indexOf(className)%20%3D%3D%3D%20-1)%20%7B%0D%0A%20%20%20%20%20%20%09%2F%2F%20Calculate%20styles%0D%0A%20%20%20%20%20%20%09const%20regex%20%3D%20%2F%26(.%2B%3F)%7B(.*%3F)%7D%2Fgs%3B%20%2F%2F%20Extracts%20psudo-selectors%2C%20ex%3B%20%26%3Aactive%20%7B%20color%3A%20blue%3B%20%7D%0D%0A%20%20%20%20%20%20%20%20const%20styleGroups%20%3D%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20selector%3A%20className%2C%20body%3A%20rawStyle.replace(regex%2C%20'')%20%7D%0D%0A%20%20%20%20%20%20%20%20%5D%3B%0D%0A%20%20%20%20%20%20%20%20let%20match%20%3D%20regex.exec(rawStyle)%3B%0D%0A%20%20%20%20%20%20%20%20while%20(match%20!%3D%20null)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20styleGroups.push(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20selector%3A%20%60%24%7BclassName%7D%24%7Bmatch%5B1%5D%7D%60%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20body%3A%20match%5B2%5D%0D%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20match%20%3D%20regex.exec(rawStyle)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20const%20style%20%3D%20styleGroups.map(group%20%3D%3E%20%60%0D%0A%20%20%20%20%20%20%20%20%20%20.%24%7Bgroup.selector%7D%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%7B%20group.body%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%60).join('')%3B%0D%0A%20%20%20%20%20%20%20%20styleEl.appendChild(document.createTextNode(style))%3B%0D%0A%20%20%20%20%20%20%20%20usedClassNames.push(className)%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20return%20el%3B%0D%0A%20%20%20%7D%0D%0A%09%7D)%0D%0A%7D)()%20as%20IStyled%3B%0D%0A%0D%0A%0D%0Aconst%20myBtn%20%3D%20styled.button%3C%7B%20inverted%3A%20boolean%20%7D%3E%60%0D%0A%09color%3A%20%24%7Bargs%20%3D%3E%20args.inverted%20%3F%20'skyblue'%20%3A%20'orangered'%7D%3B%0D%0A%20%20height%3A%2030px%3B%0D%0A%20%20margin-right%3A%205px%3B%0D%0A%20%20%0D%0A%20%20%26%3Aactive%20%7B%0D%0A%20%20%09color%3A%20%24%7Bargs%20%3D%3E%20args.inverted%20%3F%20'orangered'%20%3A%20'skyblue'%7D%3B%0D%0A%20%20%7D%0D%0A%20%20%26%3A%3Abefore%20%7B%0D%0A%20%20%09content%3A%20'--%3E%20'%0D%0A%20%20%7D%0D%0A%20%20%26%3A%3Aafter%20%7B%0D%0A%20%20%09content%3A%20'%20%3C--'%0D%0A%20%20%7D%0D%0A%60%3B%0D%0A%0D%0Aconst%20elem1%20%3D%20myBtn()%3B%0D%0Aconst%20elem2%20%3D%20myBtn(%7B%20inverted%3A%20true%20%7D)%3B%0D%0A%0D%0Aelem1.innerText%20%3D%20'Click%20me!'%3B%0D%0Aelem2.innerText%20%3D%20'Click%20me!'%3B%0D%0A%0D%0Adocument.body.append(elem1)%3B%0D%0Adocument.body.append(elem2)%3B%0D%0A%0D%0Aconst%20styles%20%3D%20styled()%3B%0D%0Adocument.body.append(styles)%3B
