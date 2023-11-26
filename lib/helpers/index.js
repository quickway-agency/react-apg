export function defaultClassNames(tag) {
  switch (tag) {
    case 'main':
      return 'container mx-auto px-4';
    case 'section':
      return 'mt-4 mb-16';
    case 'h1':
      return 'text-2xl desktop:text-4xl font-bold mt-8 mb-8 desktop:mb-16';
    case 'h2':
      return 'text-lg font-bold my-8';
    case 'p':
      return 'mb-8';
    case 'table':
      return 'table-auto border border-slate-800 rounded-xl bg-slate-900';
    case 'td':
      return 'border border-slate-800 p-4';
    default:
      return '';
  }
}
