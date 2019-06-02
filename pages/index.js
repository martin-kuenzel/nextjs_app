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
import Markdown from 'react-markdown';

const PostLink = ({show}) => (
    <li key={show.id} id={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
        </Link>
        <style jsx>{`
            a { 
                font-family: 'Arial'; 
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

const Index = props => (
    <LayoutFetch>
        <h1>Fetch sample</h1>
        <div className="markdown">
            <Markdown source={`
### react-markdown example

This is some Markdown integrated with the help of the react-markdown module.
[links](/) can be integrated easily as known from markdown syntax.

---
`} />
        </div>
        <style jsx global>{`
            .markdown { font-family:'Arial'; }
            .markdown a { text-decoration: none; color: blue; }
            .markdown a:hover { opacity: .6; }
            .markdown h3 { margin:0; padding:0; text-transform:uppercase; }
        `}</style>

        <ul>
            {props.shows.map( show => <PostLink show={show}/>)}
        </ul>
        <style jsx>{`
            h1, a { font-family: 'Arial'; }
            ul { padding: 0 }
            li { 
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
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