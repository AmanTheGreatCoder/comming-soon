'use client';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import React, { useEffect, useState } from 'react';

export const Countdown: React.FC = () => {
	const targetDate = new Date('2024-09-27T00:00:00').getTime();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 500);
		};

		handleResize(); // Check initial width
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<FlipClockCountdown
			digitBlockStyle={{
				background: '#323232',
				color: '#cccccc',
				borderRadius: '10px',
				height: isMobile ? '40px' : '60px',
				width: isMobile ? '30px' : '40px',
				fontSize: isMobile ? '25px' : '40px',
			}}
			duration={0.8}
			labelStyle={{
				color: '#000000',
				fontSize: '14px',
				fontFamily: 'var(--font-geist-sans)',
			}}
			separatorStyle={{
				color: '#323232',
				size: '8px',
			}}
			to={targetDate}
		/>
	);
};
