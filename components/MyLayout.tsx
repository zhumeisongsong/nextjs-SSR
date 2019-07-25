import Header from './Header';

const Layout = (props: any) => (
  <div>
    <Header/>
    {props.children}
  </div>
)

export default Layout;