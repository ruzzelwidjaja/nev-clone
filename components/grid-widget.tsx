import React from 'react';

type GridWidgetProps = {
  title: string;
};

const GridWidget: React.FC<GridWidgetProps> = ({ title }) => {
  return (
    <div className="z-2 w-60 h-60 bg-zinc-200 border-4 border-zinc-300 rounded-3xl flex items-center justify-center shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default GridWidget;
