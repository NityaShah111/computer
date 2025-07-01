import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const StatItem = ({ finalValue, label, startAnimation }) => {
    const [count, setCount] = useState(0);
    const duration = 2000; // 2 seconds

    useEffect(() => {
        if (!startAnimation) return;

        let startTime = null;
        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentCount = Math.floor(finalValue * percentage);

            setCount(currentCount);

            if (progress < duration) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(finalValue);
            }
        };

        requestAnimationFrame(animateCount);
    }, [startAnimation, finalValue]);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return num;
    };

    return (
        <div className="stat-item">
            <div className="stat-number">{formatNumber(count)}+</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(statsRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    const statsData = [
        { finalValue: 25, label: "Years in IT Training" },
        { finalValue: 12000, label: "Students Trained" },
        { finalValue: 30, label: "Approved Courses" },
        { finalValue: 20, label: "Certification" },
    ];

    return (
        <div className="stats-container" ref={statsRef}>
            {statsData.map((stat, index) => (
                <StatItem
                    key={index}
                    finalValue={stat.finalValue}
                    label={stat.label}
                    startAnimation={isVisible}
                />
            ))}
        </div>
    );
};

export default Stats; 