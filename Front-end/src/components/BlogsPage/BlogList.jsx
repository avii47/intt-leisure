import React, { useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';

import img2 from '../../assets/images/blog2-img.jpg'
import img3 from '../../assets/images/blog3-img.jpg'
import img4 from '../../assets/images/blog4-img.jpg'
import img5 from '../../assets/images/blog5-img.jpg'
import img6 from '../../assets/images/blog6-img.jpg'

const BlogCard = lazy(() => import('../BlogsPage/BlogCard'));

const BlogsList = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate(); 
  const img1 = 'https://imageio.forbes.com/specials-images/imageserve/66bf9f6003910b50a1799afe/AI--Artificial-Intelligence--concept--Communication-network-/960x0.jpg?format=jpg&width=1440'

  const contentData = [
    {
      'img': img1,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead, FineFinish Engineering, and INT Terminal Travel Group, has been featured in Forbes for his latest article, “Embracing Mindfulness In Leadership In The Age...',
      'date': 'September 4, 2024'
    },
    {
      'img': img2,
      'title': 'Mindfulness in Leadership: Harnessing the Power of Breath for Effective Decision-Making',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead, FineFinish Engineering, and INT Terminal Travel Group, has been featured in Forbes for his latest article, “Mindfulness in Leadership: Harnessing the...',
      'date': 'July 27, 2024'
    },
    {
      'img': img3,
      'title': '16 Insightful Ways To Measure The Impact Of Your Keynote Presentations by Forbes Expert Panel®',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead/FineFinish Engineering/INT Terminal Travel Group, has been featured on the Forbes Expert Panel for his professional insights into “16 Insightful Ways To...',
      'date': 'July 18, 2024'
    },
    {
      'img': img4,
      'title': '16 Bad Workplace Habits And How To Break Them by Forbes Expert Panel®',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead/FineFinish Engineering/INT Terminal Travel Group, has been featured on the Forbes Expert Panel for his professional insights into “16 Bad Workplace Habits...',
      'date': 'July 10, 2024'
    },
    {
      'img': img5,
      'title': '14 Reasons Entrepreneurs Give Up Too Soon (And How To Avoid Doing So) by Forbes Expert Panel®',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead/FineFinish Engineering/INT Terminal Travel Group, has been featured in the Forbes Expert Panel for his professional insight on “14 Reasons Entrepreneurs...',
      'date': 'June 28, 2024'
    },
    {
      'img': img6,
      'title': 'Mindfulness In Leadership: A Personal Journey Through The Eightfold Process',
      'sub': 'Dr. Gamini Hewawasam, the CEO of ManoLead, FineFinish Engineering, and INT Terminal Travel Group, has been featured on Forbes for his article “Mindfulness in Leadership: A Personal Journey...',
      'date': 'June 15, 2024'
    }
  ];

  useEffect(() => {
    const section = document.getElementById('blogs-list-section');
    const cardSection = document.getElementById('blog-cards-container');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardSection.classList.add('animate-cards');
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`); 
  };
  
  return (
    <section id="blogs-list-section" className={`section blogs-list-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="blogs-list-content">
        <div id='blog-cards-container' className="d-flex blog-cards-container" >
            {contentData.map((content, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                    <BlogCard
                        content={content}
                        onClick={() => handleBlogCardClick(content.id)} 
                    />
                </Suspense>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;