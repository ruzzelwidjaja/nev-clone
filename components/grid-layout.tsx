'use client'

import React from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import GridWidget from './grid-widget';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface MyGridLayoutProps {
  // Additional props can be defined here
}

const MyGridLayout: React.FC<MyGridLayoutProps> = () => {
  // Define a layout for a 3x3 grid
  const layout: Layout[] = [
    { i: '1', x: 0, y: 0, w: 2, h: 1 },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
    { i: '4', x: 0, y: 1, w: 1, h: 1 },
    { i: '5', x: 1, y: 1, w: 1, h: 1 },
    { i: '6', x: 2, y: 1, w: 1, h: 1 },
    { i: '7', x: 0, y: 2, w: 1, h: 1 },
    { i: '8', x: 1, y: 2, w: 1, h: 1 },
    { i: '9', x: 2, y: 2, w: 1, h: 1 }
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 960, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 3, md: 3, sm: 3, xs: 3, xxs: 3 }}
      autoSize={true}
      rowHeight={240} // Height of GridWidget + vertical margin
      isResizable={false}
      isDraggable={true}
      containerPadding={[10, 10]} // Padding inside the container
      // margin={[10, 10]} // Margin between items
    >
      {layout.map(item => (
        <div key={item.i}>
          <GridWidget title={`Widget ${item.i}`} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default MyGridLayout;
