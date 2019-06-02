// import Layout from "../comps/Layout";

// // The main page
// const index = () => (
//     <div>
//         <h1>Next.js test project</h1>
//         <p>Hello and welcome to my Next.js test project</p>
//     </div>
// );
// //export default Layout(index);

// import LayoutBlog from "../comps/LayoutBlog";
// import Link from "next/link";


/// POST EXAMPLE
// const PostLink = props => (
//     <li>
//         <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// const Blog = () => { return ( 
//     <LayoutBlog>
//         <h1>Next.js test Blog</h1>
//         <p>Hello and welcome to my Next.js test Blog</p>
//         <ul>
//             <PostLink title="Hello Next.js"/>
//             <PostLink title="Learning Next.js"/>
//             <PostLink title="Deploy apps even without Zeit"/>
//         </ul>
//     </LayoutBlog>
// )};

// export default Blog;

import LayoutFetch from '../comps/LayoutFetch.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <LayoutFetch>
        <h1>Fetch sample</h1>
        <ul>
            {props.shows.map( show => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </LayoutFetch>
);

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Data fetched. Count: ${data.length}`);
    return {
        shows: data.map( entry => entry.show )
    };
};

export default Index;