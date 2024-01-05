import React from 'react';
import { XForceNodeType } from '../nodes/nodeTypes';

type DefaultDataProps<T> = {
  id: string;
  name: string;
  initiallyExpanded?: boolean;
  jsxElement?: React.JSX.Element;
  draggable?: boolean;
  onDrag?: (event: React.DragEvent) => void;
  children?: DefaultDataProps<T>[];
} & T;
export type TreeProps<T> = {
  data: (DefaultDataProps<T> & T)[];
};
