import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/PackageContent.css";

import img1 from '../assets/images/destination-Dubai.jpeg';
import img2 from '../assets/images/destination-Thailand.jpeg';
import img3 from '../assets/images/destination-sriLanka.jpeg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const DestinationContent = lazy(() => import('../components/DestinationsPage/DestinationInnerContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const DestinationInnerPage = () => {

    const { id } = useParams();

    const contentData = [
      {
        'id':  1,
        'img': img1,
        'title': 'Dubai',
        'subtitle': 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka',
        'description': 'In the serene and culturally rich backdrop of Sri Lanka, where mindfulness has thrived for centuries, INTT Leisure invites leaders like you to embark on a transformative journey towards becoming more mindful and effective in your leadership role.',
        'offers': [
          {
            'offer': 'Stress Reduction in Serenity',
            'description': 'Leaders often bear the weight of significant stress. Our mindfulness programs, set against the tranquil landscapes of Sri Lanka, provide practical techniques to manage stress, allowing you to lead with clarity and resilience.'
          },
          {
            'offer': 'Enhanced Focus Amidst Natural Beauty',
            'description': 'Immerse yourself in the lush natural beauty of Sri Lanka as mindfulness practices sharpen your focus and attention, enabling you to make better decisions and prioritize effectively.'
          },
          {
            'offer': 'Ancient Wisdom for Modern Leaders',
            'description': 'Benefit from the wealth of mindfulness knowledge that Sri Lanka has cultivated since ancient times. Our programs seamlessly blend ancient wisdom with contemporary leadership principles'
          },
        ]
      },
      {
        'id':  2,
        'img': img2,
        'title': 'Thailand',
        'subtitle': 'Uncover the Luxury of Mindfulness in Sri Lanka for Educators',
        'description': 'Are you a student seeking academic excellence and personal growth? Are you an educator looking to enhance your teaching and create a more mindful classroom environment? Look no further. Join us at INTT Leisure for a transformative journey that blends the luxury of Sri Lanka with mindfulness experiences tailored for both students and educators.',
        'offers': [
          {
            'offer': 'Student Empowerment',
            'description': 'Equip students with mindfulness tools to reduce stress, improve focus, and excel academically, all within the lush and serene landscapes of Sri Lanka.'
          },
          {
            'offer': 'Educator Enhancement',
            'description': 'Elevate your teaching skills and classroom management through mindfulness techniques that foster a positive and enriching learning environment.'
          },
          {
            'offer': 'Cultural Immersion',
            'description': 'Immerse yourself in the rich cultural heritage of Sri Lanka, where mindfulness has thrived for centuries, adding depth to your mindfulness journey.'
          },
        ]
      },
      {
        'id':  3,
        'img': img3,
        'title': 'Sri Lanka',
        'description': 'Is your corporate team ready to embark on a transformative journey that combines productivity enhancement with holistic well-being? Join us at INTT Leisure as we take your team on a mindful tour of Sri Lanka. Immerse yourselves in the island’s beauty while honing mindfulness skills that boost both productivity and overall well-being.',
        'offers': [
          {
            'offer': 'Leadership Retreats',
            'description': 'Empower your leaders with mindfulness practices that promote clarity, resilience, and authentic leadership in the idyllic settings of Sri Lanka.'
          },
          {
            'offer': 'Employee Wellness Escapes',
            'description': 'Enhance employee well-being, reduce stress, and create a healthier workplace through our mindfulness programs, tailored for corporate teams.'
          },
          {
            'offer': 'Team Building Expeditions',
            'description': 'Strengthen team dynamics and collaboration through mindfulness-based team-building activities amidst Sri Lanka’s inspiring landscapes.'
          },
          {
            'offer': 'Stress Mastery Seminars',
            'description': 'Equip your team with stress-reduction techniques, resulting in a happier and more productive corporate culture.'
          },
        ]
      }
    ];
  
    const contentId = parseInt(id, 10);
    const content = contentData.find(item => item.id === contentId);
  
    if (!content) {
      return <div>Content not found</div>;
    }

    return (
        <>
            <Helmet>
                <meta name="description" content="find destinations for you" />
                <link rel="canonical" href="https://inttleisure.com/destinations" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={content.img} title={content.title} sub={content.subtitle} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <DestinationContent content={content} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <ScrollToTopButton />

        </>
    )
}

export default DestinationInnerPage;