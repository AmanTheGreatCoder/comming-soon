'use client';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import React from 'react';

export const Countdown: React.FC = () => {
	const targetDate = new Date('2024-09-27T00:00:00').getTime();

	return (
		<FlipClockCountdown
			digitBlockStyle={{
				background: '#323232',
				color: '#cccccc',
				borderRadius: '10px',
				height: '60px',
				width: '40px',
				fontSize: '40px',
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
