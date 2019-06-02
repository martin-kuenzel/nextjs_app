import Header from './Header.js'

const style = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const LayoutFetch = props => (
    <div style={style}>
        <Header />
        {props.children}
    </div>
)

export default LayoutFetch;