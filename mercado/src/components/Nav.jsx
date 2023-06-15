import {Link} from 'react-router-dom'

const Nav = ()=>{
  return (
    <div>
      <div className='nav_bar'>
        <Link className='link' to='/'>Home</Link>
        {/* <Link className='link' >Profile</Link> */}
        <Link className='link' to='/community'>Community</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/art'>Art</Link>
        <Link className='link' to='/foods'>Food</Link>
        <Link className='link' to='/services'>Services</Link>
        <Link className='link' to='/markets'>Markets</Link>

      </div>
    </div>
  )
}

export default Nav