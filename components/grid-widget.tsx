import React from 'react';

type GridWidgetProps = {
  title: string;
};

const GridWidget: React.FC<GridWidgetProps> = ({ title }) => {
  return (
    <div className="z-10 w-[280px] h-[280px] bg-zinc-200  rounded-3xl flex items-center justify-center shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default GridWidget;
