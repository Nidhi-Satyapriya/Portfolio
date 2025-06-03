

import BlogCard from "./BlogCard";
import config from "../../../gitprofile.config.ts";

export default function Home() {
  return (
    <div>
      {config.blog.enable && <BlogCard loading={false} />}
    </div>
  );
}
