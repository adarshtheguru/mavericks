import React from 'react';
import { HiCheck, HiLightningBolt, HiChartBar, HiSparkles } from 'react-icons/hi';
import useFetch from '../../hooks/useFetch';
import Loader from '../common/Loader';

const AboutUs = () => {
  const { data: companyData, loading } = useFetch('/data/company.json');

  if (loading) {
    return <Loader fullScreen={false} />;
  }

  return (
    <section id="about" className="about-us">
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__text">
            <p className="about-us__subtitle">Who We Are</p>
            <h2 className="about-us__title">
              Your Strategic Partner in <span className="highlight">Growth</span>
            </h2>
            <p className="about-us__description">
              {companyData?.about?.description}
            </p>
            <p className="about-us__description">
              Whether you're launching a product, building brand awareness, or celebrating a milestone, we bring the vision, execution, and energy to make it unforgettable.
            </p>

            <div className="about-us__features">
              {companyData?.usps?.map((usp) => (
                <div key={usp.id} className="about-us__feature">
                  <div className="icon">
                    {usp.icon === 'handshake' && <HiCheck />}
                    {usp.icon === 'chart' && <HiChartBar />}
                    {usp.icon === 'rocket' && <HiLightningBolt />}
                  </div>
                  <div className="content">
                    <h4 className="title">{usp.title}</h4>
                    <p className="text">{usp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="about-us__cta">
              Let's Create Something Extraordinary
            </a>
          </div>

          <div className="about-us__visual">
            {companyData?.stats && (
              <div className="stats-grid">
                {companyData.stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">
                      <HiSparkles />
                    </div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
