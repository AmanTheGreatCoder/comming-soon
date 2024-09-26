'use client';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import React, { useRef } from 'react';

export const Countdown: React.FC = () => {
	const clockRef = useRef<any>(null);
	const targetDate = new Date('2024-09-27T00:00:00').getTime();

	return (
		<FlipClockCountdown
			digitBlockStyle={{
				background: '#323232',
				color: '#cccccc',
				borderRadius: '10px',
				height: '100px',
				width: '60px',
				fontSize: '70px',
			}}
			duration={0.8}
			labelStyle={{
				color: '#000000',
				fontSize: '20px',
				fontFamily: 'var(--font-geist-sans)',
			}}
			to={targetDate}
		/>
	);
};
