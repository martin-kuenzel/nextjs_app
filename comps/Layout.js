import Header from './Header';

const style = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = Page => {
    return () => (
        <div style={style}>
            <Header />
            <Page />
            {/* {props.children} */}
        </div>
    );
}

export default Layout;