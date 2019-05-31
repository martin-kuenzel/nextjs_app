import { withRouter } from 'next/router';
import LayoutBlog from '../comps/LayoutBlog';

const PageContent = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <h5>The posted blog content.</h5>
    </div>
));

const Page = props => (
    <LayoutBlog>
        <PageContent />
    </LayoutBlog>
);

export default Page;