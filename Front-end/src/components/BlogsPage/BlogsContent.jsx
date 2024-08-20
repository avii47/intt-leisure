import React, { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/BlogsPage.css';

const BlogsContent = () => {

  const { blogId } = useParams();

  const isMobileView = useMobileView();
  const img1 = 'https://img.freepik.com/free-photo/businessman-with-landscapes-background-double-exposure_155003-32409.jpg?t=st=1723790774~exp=1723794374~hmac=33df0c5585157587ed51972751ef6293aba75113fcb755b37ecd3e1cde928fab&w=1380';
  const img2 = 'https://img.freepik.com/free-photo/medium-shot-people-sitting_23-2148686537.jpg?t=st=1723802838~exp=1723806438~hmac=237f4639453991056783ce322f64e408e2b2b83405cf1d21e77224d1ce05ca77&w=1380'

  return (
    <section id="blogs-content-section" className={`section blogs-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="blogs-section-content">
         <h3 className='font-primary' style={{fontSize:'28px'}}>Mindfulness In Leadership: Harnessing The Power Of Breath For Effective Decision-Making</h3>
        <p className='font-secondary'>Dr. Gamini Hewawasam, founder of ManoLead, is a scholar-practitioner specializing in the intersection of mindfulness and leadership theory.</p>
        <img className='blogs-img' src={img1} alt="blogs-img" />
        <p className="font-secondary">
            Within the demanding nature of business, effective leadership abilities are crucial for achieving organizational success. One trait that significantly enhances the ability to make sound, profitable decisions is mindfulness. Specifically, I believe the practice of Ānāpānasati, a word from the Pāli language that translates to “mindfulness of breathing,” is something all leaders should adopt.
        </p>
        <p className="font-secondary">
            Ānāpānasati, rooted in ancient Buddhist teachings, is a practice in which deep meditation and mindfulness can be achieved. Mindful breathing requires focusing on the natural flow of your breath and noticing how it produces a tranquil state. As your mind and body become more relaxed and less susceptible to distractions, they gain the ability to become more aware of external and internal processes. It allows you to become more alert.
        </p>
        <p className="font-secondary">
            orporate culture frequently creates high-pressure situations that necessitate clear thinking and executive skills. When this increased awareness is applied in corporate settings, leaders can generate stronger decision-making skills and guide their team onto the best path.
        </p>
        <img className='blogs-img' src={img2} alt="blogs-img" />
        <h3 className='font-primary' style={{fontSize:'28px'}}>A Practical Guide For Corporate Leaders</h3>
        <p className='font-secondary'>Incorporating mindful breathing into your daily routine is a great way to attain a state of calmness and clarity. Here is a process that you can use to pursue the practice of Ānāpānasati.</p>

        <div className="topics font-secondary">
            <ul>
                <li><a href="#topic1">Prepare The Mind And Body</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
                <li><a href="#topic2">Observe And Relax The Breath</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
                <li><a href="#topic3">Experience Mental And Physical Comfort</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
                <li><a href="#topic4">Enhance And Stabilize The Mood</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
                <li><a href="#topic5">Gain Insight And Freedom</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
                <li><a href="#topic6">Conclusion</a><i class="topic-arrow-icon fa-solid fa-angle-down"></i></li>
            </ul>
        </div>

        <div className="content font-secondary">
            <section id="topic1">
                <h5>Prepare The Mind And Body</h5>
                <p>First, find a comfortable place to begin your breathing exercise. Sit with your back straight, as posture can impact your mood and ability to relax. Next, begin to detach from the surrounding environment and external distractors. Then move away from internal distractions, like thoughts focused on memories or imagining the future.</p>
                <p>Turn your attention to your subjective experience. Look at your body from the inside and really feel its presence. Notice sensations that may arise within you during this moment and attempt to name them.</p>
                <p>These steps can help you disengage with external pressures and internal distractions, creating a foundation of calmness. This is useful in workplace scenarios like preparing for an important meeting because you'll be more focused on the present moment, ultimately enhancing your clarity and effectiveness.</p>
            </section>
            <section id="topic2">
                <h5>Observe And Relax The Breath</h5>
                <p>Pay attention to the natural rhythm of your breathing, and notice the duration of your inhalation and exhalation. Notice the feelings throughout your entire body as you breathe in and breathe out. Feel the physical sensations of breathing throughout the body and observe any changes that come with it. Continue breathing in and out as you progressively relax your body.</p>
                <p>By observing and relaxing your breath, you can reduce physical tension and promote a state of calmness. This is particularly useful in high-stress situations where maintaining your composure is crucial, such as delivering a presentation.</p>
            </section>
            <section id="topic3">
                <h5>Experience Mental And Physical Comfort</h5>
                <p>Now, begin to explore internal happiness. Notice any positive feelings that arise as you begin to feel relaxed, and feel the comfort that flows through your relaxed body. Then observe whether other mental activity comes up. Calm any agitating thoughts by returning to the rhythm of your breath.</p>
                <p>This process can help you enhance your ability to think clearly and make balanced decisions. For instance, during a negotiation, mental and physical relaxation is beneficial before formulating and executing decisions. You're much more likely to be efficient and confident because you'll feel grounded.</p>
            </section>
            <section id="topic4">
                <h5>Enhance And Stabilize The Mood</h5>
                <p>Be aware of your mood/emotional state at this moment, and approach it without judgment. Give your attention to positive emotions, but allow every feeling to settle naturally. Then free yourself from emotional turbulence by letting go.</p>
                <p>Stabilizing your mood is key to establishing emotional resilience, which enables you to handle challenges with greater equanimity. If you're facing a crisis, use these steps to remain calm and composed so it becomes easier to guide your team more profitably and effectively.</p>
            </section>
            <section id="topic5">
                <h5>Gain Insight And Freedom</h5>
                <p>Recognize the transient nature of experiences, and detach from fleeting emotions. Focus on calming mental agitation so you can finally experience the liberation that comes with a calm, clear mind.</p>
                <p>These final stages of mindful breathing can provide you with the mental space for profound insights and a sense of freedom from habitual reactions. This enables the ability to approach problems with a fresh perspective and innovative solutions. For example, if you're working on a complex project, freeing your mind allows new insights to enter so you can foster creativity and strategic thinking.</p>
            </section>
            <section id="topic6">
                <h5>Conclusion</h5>
                <p>As a leader, you have an imperative duty to guide your teams to success and ensure collective well-being. To successfully do so, you must first learn how to guide yourself during times of high stress or complexity. I believe it's evident how Ānāpānasati is a powerful practice for enhancing leaders’ decision-making capabilities. By mastering relaxation and mental calmness, you can achieve tranquility that facilitates a more effective, profitable culture within your team and the workplace at large.</p>
            </section>
        </div>
        <hr />

        <div className="recommended">
            <h3 className="">Recommended for you:</h3>
            <div className="col-12 d-flex">
                <div className="col-6" style={{paddingRight:'20px'}}>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/07/10/16-insightful-ways-to-measure-the-impact-of-your-keynote-presentations" target="_blank">16 Insightful Ways To Measure The Impact Of Your Keynote Presentations</a><i class="fas fa-chevron-right"></i></li>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/07/03/16-bad-workplace-habits-and-how-to-break-them" target="_blank">16 Bad Workplace Habits And How To Break Them</a><i class="fas fa-chevron-right"></i></li>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/06/04/mindfulness-in-leadership-a-personal-journey-through-the-eightfold-process" target="_blank">Mindfulness In Leadership: A Personal Journey Through The Eightfold Process</a><i class="fas fa-chevron-right"></i></li>
                </div>
                <div className="col-6" style={{paddingLeft:'20px'}}>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/07/10/16-insightful-ways-to-measure-the-impact-of-your-keynote-presentations" target="_blank">16 Insightful Ways To Measure The Impact Of Your Keynote Presentations</a><i class="fas fa-chevron-right"></i></li>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/07/03/16-bad-workplace-habits-and-how-to-break-them" target="_blank">16 Bad Workplace Habits And How To Break Them</a><i class="fas fa-chevron-right"></i></li>
                    <li><a href="https://www.forbes.com/councils/forbescoachescouncil/2024/06/04/mindfulness-in-leadership-a-personal-journey-through-the-eightfold-process" target="_blank">Mindfulness In Leadership: A Personal Journey Through The Eightfold Process</a><i class="fas fa-chevron-right"></i></li>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default BlogsContent;