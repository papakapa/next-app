import Link from 'next/link'

const Index = () => {
 return (<>
  <h1>fsd</h1>
  <p>index page</p>
  <p><Link><a>About</a></Link>></p>
  <p><a href="/posts">Posts</a></p>
 </>);

};

export default Index;