import React, { useRef } from "react";
import { Column } from "@ant-design/plots";

interface DataItem {
  type: string;
  amount: number;
}

const RevenuePage: React.FC = () => {
  const data: DataItem[] = [
    { type: "tháng 1", amount: 12000000},
    { type: "tháng 2", amount: 20000000 },
    { type: "tháng 3", amount: 44000000 },
    { type: "tháng 4", amount: 30000000 },
    { type: "tháng 5", amount: 40000000 },
    { type: "tháng 6", amount: 11000000 },
    { type: "tháng 7", amount: 46000000 },
    { type: "tháng 8", amount: 77000000 },
    { type: "tháng 9", amount: 13000000 },
    { type: "tháng 10", amount: 23000000 },
    { type: "tháng 11", amount: 34000000 },
    { type: "tháng 12", amount: 11000000 },
  ];
  const chartRef = useRef<any>(null);

  const config = {
    data,
    xField: "type",
    yField: "amount",
    axis: {
      y: {
        title: 'DOANH THU (VND)',
        labelFormatter: ','
      },
    },
    onReady: (plot: any) => (chartRef.current = plot),
    theme: "academy",
    title: 'Doanh thu của từng tháng trong năm.',
  };

  return (
    <div>
      <Column {...config} />
    </div>
  );
};

export default RevenuePage;
