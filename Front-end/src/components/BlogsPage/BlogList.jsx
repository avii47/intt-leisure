import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';

const BlogCard = lazy(() => import('../BlogsPage/BlogCard'));

const BlogsList = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate(); 
  const img4 = 'https://imageio.forbes.com/specials-images/imageserve/66bf9f6003910b50a1799afe/AI--Artificial-Intelligence--concept--Communication-network-/960x0.jpg?format=jpg&width=1440'

  const contentData = [
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
    },
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Best places to have the environment to practice mindfulness with ease.'
    },
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'title': 'Embracing Mindfulness In Leadership In The Age Of AI And Corporate Complexity',
      'sub': 'Well trained experts to guide you through the journey.'
    }
  ];

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`); 
  };
  
  return (
    <section id="blogs-list-section" className={`section blogs-list-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="blogs-list-content">
        <div id='' className="d-flex blog-cards-container" >
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