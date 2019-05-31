import Link from "next/link";
export default function (){
    return (
        <div>
            <h1>About page</h1>
            <p>This is the pages content.</p>
            <Link href="/"><button>mainpage</button></Link>
            {/* <a href="/">back</a> */}
        </div>
    );
};