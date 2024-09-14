import { GetProp, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = GetProp<MenuProps, "items">[number];

const SideBar = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: "1",
      label: "Dashboard",
      onClick: () => {
        navigate("/dashboard/subcription")
      },
    },
    {
      key: "2",
      label: "Posts Management",
      onClick: () => {
        navigate("/post-manage")
      },
    },
    {
      key: "3",
      label: "Settings",
      onClick: () => {
        navigate("/setting")
      },
    },
  ];
  return (
    <Menu
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
};

export default SideBar;
