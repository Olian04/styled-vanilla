const hashString = str => {
  let p1 = 2654435761,
    p2 = 1597334677,
    h1 = 0xdeadbeef | 0,
    h2 = 0x41c6ce57 | 0;
  for (let i = 0, ch; i < str.length; i++) {
    (ch = str.charCodeAt(i)),
      (h1 = Math.imul(h1 + ch, p1)),
      (h2 = Math.imul(h2 + ch, p2));
  }
  (h1 = Math.imul(h1 ^ (h1 >>> 16), p2)),
    (h2 = Math.imul(h2 ^ (h2 >>> 15), p1));
  return (h2 & 2097151) * 4294967296 + h1;
};

type styledElementConstructor<G> = <T extends object>(
  consts: TemplateStringsArray,
  ...vars: (((args: Partial<T>) => string | number) | string | number)[]
) => (props?: Partial<T>) => G;

interface IStyled {
  (): HTMLStyleElement;
  button: styledElementConstructor<HTMLButtonElement>;
  [tag: string]: styledElementConstructor<HTMLElement>;
}

const styled_: IStyled = (() => {
  // Init function
  const usedClassNames = [];
  const styleEl = document.createElement("style");

  let needsToFetchedStyleEl = true, haveDeliveredStyleTip = false;
  const loadCheck = () => {
    if (needsToFetchedStyleEl && !haveDeliveredStyleTip) {
      console.warn(`styled-vanilla: It looks like you are trying to use a styled vanilla component without loading the associated styles.\nYou can load the styles by calling "document.body.append(styled())".`);
      haveDeliveredStyleTip = true;
    }
  };
  return new Proxy(
    () => {
      // Returns reference to style element
      console.log('fetched styles');
      needsToFetchedStyleEl = false;
      return styleEl;
    },
    {
      get: (_, tag: string) => (consts, ...vars) => (props = {}) => {
        if (needsToFetchedStyleEl) {
          window.addEventListener('mousemove', loadCheck, { once: true });
          window.addEventListener('keydown', loadCheck, { once: true });
        }
        const el = document.createElement(tag);
        let constOffset = 0,
          varOffset = 0;
        let rawStyle = "";
        for (let i = 0; i < consts.length + vars.length; i++) {
          if (i % 2 === 0) {
            rawStyle += consts[constOffset++];
          } else {
            const tmp = vars[varOffset++];
            if (typeof tmp === "function") {
              rawStyle += tmp(props);
            } else {
              rawStyle += tmp;
            }
          }
        }
        const className = `C_${hashString(rawStyle)}`;
        el.className = className;
        if (usedClassNames.indexOf(className) === -1) {
          // Calculate styles
          const regex = /&(.+?){(.*?)}/gs; // Extracts psudo-selectors, ex; &:active { color: blue; }
          const styleGroups = [
            { selector: className, body: rawStyle.replace(regex, "") }
          ];
          let match = regex.exec(rawStyle);
          while (match != null) {
            styleGroups.push({
              selector: `${className}${match[1]}`,
              body: match[2]
            });
            match = regex.exec(rawStyle);
          }
          const style = styleGroups
            .map(
              group => `
            .${group.selector} {
              ${group.body}
            }
          `
            )
            .join("");
          styleEl.appendChild(document.createTextNode(style));
          usedClassNames.push(className);
        }
        return el;
      }
    }
  );
})() as IStyled;

exports = styled_;
export const styled = styled_;
export default styled_;
