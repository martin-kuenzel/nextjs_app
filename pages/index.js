// import Layout from "../comps/Layout";

// // The main page
// const index = () => (
//     <div>
//         <h1>Next.js test project</h1>
//         <p>Hello and welcome to my Next.js test project</p>
//     </div>
// );
// //export default Layout(index);

import LayoutBlog from "../comps/LayoutBlog";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Blog = () => { return ( 
    <LayoutBlog>
        <h1>Next.js test Blog</h1>
        <p>Hello and welcome to my Next.js test Blog</p>
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Learning Next.js"/>
            <PostLink title="Deploy apps even without Zeit"/>
        </ul>
    </LayoutBlog>
)};

export default Blog;