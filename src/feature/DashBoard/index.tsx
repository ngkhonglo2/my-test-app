import { Outlet, useNavigate } from "react-router-dom";
import LayoutPage from "../../components/Layout";
import { Radio, Space } from "antd";
import { useEffect, useState } from "react";

const DashBoardPage = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState<"subcription" | "revenue">(
    "subcription"
  );

  useEffect(() => {
    navigate(`/dashboard/${position}`)
  }, [position]);

  return (
    <LayoutPage>
      <div className="category">DashBoard</div>
      <Space style={{paddingBottom: 20}}>
        <Radio.Group
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <Radio.Button value="subcription">subcription</Radio.Button>
          <Radio.Button value="revenue">revenue</Radio.Button>
        </Radio.Group>
      </Space>
      <Outlet />
    </LayoutPage>
  );
};

export default DashBoardPage;
