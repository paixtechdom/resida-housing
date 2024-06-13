import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { delayLoad } from "./assets/Functions"
import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import { Footer } from './assets/components/Footer';

const HomePage = lazy(() => delayLoad(import("./pages/home/page")))
const ContactPage = lazy(() => delayLoad(import("./pages/contact/page")))
import logo from "./assets/images/Logo green.png"


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<FallbackComponent />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };


  const FallbackComponent = () => {
    return(
        <section className='center flex-col gap-2 text-center h-screen w-full'>
            <img src={logo} alt="Resida Housing Academy Logo" className='animate-bounce w-fit'/>
            <strong className='font-bold text-primary'>
                Resida - Housing Academy
            </strong>
        </section>
    )
  }