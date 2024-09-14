import { useEffect, useState } from "react";
import LayoutPage from "../../components/Layout";
import TablePosts from "./components/TablePosts";

export interface IDataPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostManagePage = () => {
  const [dataPost, setDataPost] = useState<IDataPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      setIsLoading(false);
      const json: IDataPosts[] = await response.json();
      setDataPost(json);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutPage>
      <div className="category">Users Management</div>
      <TablePosts data={dataPost} isLoading={isLoading} />
    </LayoutPage>
  );
};

export default PostManagePage;
