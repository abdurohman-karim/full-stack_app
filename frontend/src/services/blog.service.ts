import { BlogType } from "@/interfaces/blog.interface";
import axios from "axios";

export const BlogService = {
    async getAllBlogs() {
        const {data} = await axios.get<BlogType[]>("http://localhost:8000/api/blog");
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
       
        if (!data) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
       
        return data;
      }
}