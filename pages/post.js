import { withRouter } from 'next/router';
// import LayoutBlog from '../comps/LayoutBlog';

// const PageContent = withRouter( props => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <h5>The posted blog content.</h5>
//     </div>
// ));
// const Page = () => (
//     <LayoutBlog>
//         <PageContent />
//     </LayoutBlog>
// );

import fetch from 'isomorphic-unfetch';
import LayoutFetch from '../comps/LayoutFetch';

const PageContent = withRouter( props => (
        <LayoutFetch>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g,'')}</p>
            <img src={props.show.image.medium} />
        </LayoutFetch>
    )
)

PageContent.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    
    console.log(`Fetched show: ${show.name}`);

    return {show};
}

export default PageContent;