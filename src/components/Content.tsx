'use client';

import { useState } from 'react';

export function Content() {
  const [count, setCount] = useState(0);
  console.log('render');
  return <>Content</>;
}
