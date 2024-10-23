export default async function Nextjs(){
    await new Promise(resolve => {
        setTimeout(resolve,5000);
    });
    return(
        <div className="bg-black h-screen text-white ">
            <h1 className="text-4xl font-bold text-center">Next.js</h1>
            <br/>
            <p>Next.js is a popular React framework that enables developers to build server-rendered React 
                applications with ease. It provides features like:</p>
                <br/>
            <ol className="list-decimal list-inside ">
            <li>Server-Side Rendering (SSR): Pages can be rendered on the server, improving performance and SEO.</li>
            <br/>
            <li>Static Site Generation (SSG): Pre-rendering pages at build time for faster loading.</li>
            <br/>
            <li>API Routes: Allows you to create API endpoints within the same application.</li>    
            <br/>
            <li>Automatic Code Splitting: Only loads the necessary code for the current page, optimizing performance.</li>
            <br/>
            <li>File-Based Routing: Pages are created based on the file structure, simplifying navigation setup.</li>
            <br/>
            <li>Built-in CSS and Sass Support: Easy styling integration without complex configurations.</li>
            </ol>
            <br/>
            <p>Next.js is particularly well-suited for building scalable and performant web applications and is widely
                used in both enterprise and small-scale projects.</p>
        </div>
    )
}