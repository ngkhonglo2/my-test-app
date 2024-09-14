import { Chart } from '@ant-design/charts';
import { Line } from '@ant-design/plots';

interface DataItem {
  date: string;
  user: number;
}

const SubcriptionPage: React.FC = () => {
  const data: DataItem[] = [
    { date: '10/09/24', user: 3 },
    { date: '11/09/24', user: 4 },
    { date: '12/09/24', user: 9 },
    { date: '13/09/24', user: 5 },
    { date: '14/09/24', user: 4 },
    { date: '15/09/24', user: 6 },
    { date: '16/09/24', user: 7 },
  ];
  const config: Chart = {
    data,
    xField: 'date',
    yField: 'user',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
    theme: "academy",
    title: 'Lượng người đăng ký trong 7 ngày gần nhất.',
    tooltip: {
      title: 'Date',
      items: [{ channel: 'y' }],
    },
    axis: {
      x: {
        title: 'NGÀY GẦN NHẤT',
      },
      y: {
        title: 'LƯỢNG NGƯỜI ĐĂNG KÝ',
      },
    },
  };
  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default SubcriptionPage;