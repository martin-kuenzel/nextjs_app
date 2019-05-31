import Link from 'next/link';

const linkStyle = {
    marginLeft: 15,
    padding: 2,
    border: "solid thin"
};

export default () => (
    <div>
        <hr noshade />
        <Link href="/"><button style={linkStyle}>mainpage</button></Link>
        <Link href="/about"><button style={linkStyle} title="About page">about</button></Link>
        <hr noshade />
    </div>
);  