import Header from './Header';

const style = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const LayoutBlog = props => (
    <div style={style}>
        <Header />
        {props.children}
    </div>
);
export default LayoutBlog;