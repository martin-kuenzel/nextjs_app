import Link from 'next/link';
const Index = () => (
    <div>
        <h1>Next.js test project</h1>
        <p>Hello and welcome to my Next.js test project</p>
        <Link href="/about"><button title="About page">about</button></Link><br></br>
        {/* <a href="about">about</a> */}
    </div>
);

export default Index;