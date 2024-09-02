import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutUsImg from '../assets/images/Why Choose us_.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const PackageContent = lazy(() => import('../components/PackageContentPage/PackageContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const PackageContentPage = () => {
    const img = 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032381.jpg?t=st=1722240323~exp=1722243923~hmac=f8549aaa2337e0db5ef2134a7d64d62945b7ed782bb56176c1f3910c557287c0&w=1380'
    const title = 'Mindfulness for Leaders';
    const sub = 'Explore Our Services';

    return (
        <>
            <Helmet>
                <meta name="description" content="find best package for you" />
                <link rel="canonical" href="https://inttleisure.com/services" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={AboutUsImg} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <PackageContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>

        </>
    )
}

export default PackageContentPage;