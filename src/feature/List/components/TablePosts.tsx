import { Button, Input, InputRef, Space, Table, TableColumnsType, TableColumnType } from "antd";
import { IDataPosts } from "..";
import { FaEye } from "react-icons/fa";
import ModalPostView from "./ModalPostView";
import { useRef, useState } from "react";
import { FilterDropdownProps } from "antd/es/table/interface";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

interface ITablePosts {
  data: IDataPosts[];
  isLoading: boolean;
}
type DataIndex = keyof IDataPosts;

const TablePosts: React.FC<ITablePosts> = ({ data, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IDataPosts>();

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<IDataPosts> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });



  const columns: TableColumnsType<IDataPosts> = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      width: "20%",
      ...getColumnSearchProps('userId'),
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "50%",
      ...getColumnSearchProps('title'),
    },
    {
      title: "action",
      width: "20%",
      align: "center",
      render: (val) => (
        <FaEye
          onClick={() => handleClickDetailPost(val)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  const handleClickDetailPost = (data: IDataPosts) => {
    setDataDetail(data);
    setIsModalOpen(true);
  };

  const handleCloseDetailPost = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
      <ModalPostView isModalOpen={isModalOpen} handleCancel={handleCloseDetailPost} dataDetail={dataDetail} />
    </div>
  );
};

export default TablePosts;
