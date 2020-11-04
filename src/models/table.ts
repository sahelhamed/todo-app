// Node_modules
import { ReactElement } from 'react';

export interface Data {
  [key: string]: string | number;
}

export interface Column {
  id: number;
  title: string;
  column: string;
  type: string;
  component?: (data: Data) => ReactElement;
}
