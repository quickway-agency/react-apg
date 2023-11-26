import { createElement } from 'react';
import { defaultClassNames } from './helpers';

export function Page({ content, getClassNames = null }) {
  if (!content) {
    return <></>;
  }
// WFQ
  const parseJsonToReact = (json) => {
    const { tag, children } = json;

    if (!tag) {
      return null;
    }

    const reactChildren = Array.isArray(children)
      ? children.map(
          (child) =>
            parseJsonToReact(child) || null
        )
      : children;

    return createElement(tag, { className: getClassNames ? getClassNames(tag) : defaultClassNames(tag) }, reactChildren);
  };

  return <>{parseJsonToReact(content)}</>;
}
