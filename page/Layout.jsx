import {Link, Outlet, useNavigate} from 'react-router-dom'


// css가져오기
import '../src/index.css'

function Layout(){

    return(
        <>
        
            <header className="container top-menu">
                <Link to="/"><img className="logo-image" src="../image/image1.jpeg" alt="이미지야"></img></Link>
                <div><Link to="/Login">로그인</Link></div>
                <div><Link to="/Login">멤버십</Link></div>
                <div><Link to="/Login">고객센터</Link></div>
                <div><Link to="/Login">회원가입.</Link></div>
            </header>
            
            <Outlet/>
        </>
    )

}

export default Layout;