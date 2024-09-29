import Header from './header'
import Footer from './footer'
import '../css/about.css'

export default function About() {
    return (
        <>
            <Header />
            <div className='about'>
                <h1>Who are we?</h1>
                <p> Brentwood Group operates as a Westlake Village, California based trade and services provider. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Brentwood Group offers high-quality products and servies in the electrical and textile markets.
                    We have shops both online and in wholesale channels. 
                </p>
            </div>
            <Footer />
        </>
    )
}