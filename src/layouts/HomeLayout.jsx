import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import LeftNav from '../Components/LayoutComponents/LeftNav';
import RightNav from '../Components/LayoutComponents/RightNav';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-Poppins'>

            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto my-4'>
                <Navbar></Navbar>
            </nav>


            <main className='w-11/12 mx-auto mt-4 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftNav></LeftNav>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>


        </div>
    );
};

export default HomeLayout;