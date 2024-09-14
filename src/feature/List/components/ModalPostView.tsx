import { Input, Modal, Typography } from "antd";
import { IDataPosts } from "..";
import TextArea from "antd/es/input/TextArea";

interface IModalPostView {
  isModalOpen: boolean;
  handleCancel: () => void;
  dataDetail?: IDataPosts;
}

const ModalPostView = ({
  isModalOpen,
  handleCancel,
  dataDetail,
}: IModalPostView) => {
  return (
    <Modal
      title={`User detail: ${dataDetail?.id ?? ""}`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer
    >
      <div>
        <Typography.Title level={5}>User ID</Typography.Title>
        <Input value={dataDetail?.userId ?? ""} disabled />
      </div>
      <div>
        <Typography.Title level={5}>Title</Typography.Title>
        <TextArea rows={2} disabled value={dataDetail?.title ?? ""} />
      </div>
      <div>
        <Typography.Title level={5}>Body</Typography.Title>
        <TextArea rows={4} disabled value={dataDetail?.body ?? ""} />
      </div>
    </Modal>
  );
};

export default ModalPostView;
