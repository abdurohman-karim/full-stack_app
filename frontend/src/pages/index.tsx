import { BlogType } from "@/interfaces/blog.interface";
import { BlogService } from "@/services/blog.service";
import { GetServerSideProps, NextPage } from "next";

// pages/index.tsx or pages/[slug].tsx

const Home: NextPage<HomePageProps> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogService.getAllBlogs();

  return {
    props: { blogs },
  };
};

interface HomePageProps {
  blogs: BlogType[];
}

