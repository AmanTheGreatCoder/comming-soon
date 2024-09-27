'use client';
import { SocialIcon } from 'react-social-icons';
import { Countdown } from './Coutdown';
import { useEffect, useRef, useState } from 'react';

export default function CommingSoon() {
	const [isSticky, setIsSticky] = useState(false);
	const stickyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (stickyRef.current) {
				const rect = stickyRef.current.getBoundingClientRect();
				const scrollTop =
					window.pageYOffset || document.documentElement.scrollTop;

				if (scrollTop > 0 && rect.top <= 0) {
					setIsSticky(true);
				} else {
					setIsSticky(false);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				ref={stickyRef}
				className={`transition-all duration-300 ease-in-out justify-center items-center ${
					isSticky
						? 'fixed shadow-md top-0 left-0 right-0 w-full h-11 flex z-[9999] items-center bg-[#f2fbbc] animate-slideDown'
						: 'relative w-full h-11 flex bg-[#f2fbbc]'
				}`}
			>
				<p className='text-base font-playfair-display font-extralight text-black w-full text-center'>
					Something great is on the way
				</p>
			</div>

			<div
				className={`relative flex flex-col lg:flex-row w-full min-h-screen ${
					isSticky ? 'mt-11' : ''
				}`}
			>
				<div className='md:block relative w-full lg:w-1/2 md:min-h-screen'>
					<img
						src={'https://ambraee.com/cdn/shop/files/JBL00251.jpg'}
						alt='img'
						className='w-full md:min-h-screen object-cover'
					/>
					<p className='text-2xl text-gray-900 absolute top-[-30px] left-1 font-medium'>
						<img src='/assets/images/logo.svg' alt='' className='w-28 h-28' />
					</p>
					<div className='absolute md:hidden bottom-0 left-0 right-0 z-50 flex justify-center '>
						<div className='flex gap-2 bg-transparent p-2 rounded'>
							<SocialIcon
								url='https://www.instagram.com/'
								bgColor='transparent'
							/>
							<SocialIcon
								url='https://www.whatsapp.com/'
								bgColor='transparent'
							/>
							<SocialIcon
								url='https://www.facebook.com/'
								bgColor='transparent'
							/>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex absolute top-0 bottom-0 left-4 z-50 flex-col justify-center gap-4'>
					<SocialIcon url='https://www.instagram.com/' bgColor='transparent' />
					<SocialIcon url='https://www.whatsapp.com/' bgColor='transparent' />
					<SocialIcon url='https://www.facebook.com/' bgColor='transparent' />
				</div>
				<div className='relative w-full lg:w-1/2 bg-[#eeeded] min-h-screen p-4 md:p-8 flex flex-col justify-center items-center gap-4 md:gap-8 max-md:pb-20 pt-10'>
					<div className='flex flex-col items-center gap-6 md:gap-8'>
						<h2 className='text-6xl md:text-8xl text-black w-full text-center bonheur-royale-regular'>
							Coming Soon
						</h2>

						<p className='text-xl font-playfair-display font-extralight text-black w-full text-center'>
							Our women&apos;s collection brings you beautiful designs inspired
							by tradition but made for today. Stay tuned for something special!
						</p>

						<Countdown />
					</div>

					<div className='flex flex-col items-center  md:justify-center md:flex-row gap-5 md:max-w-4xl w-full md:p-5 pb-4'>
						<div className='max-sm:flex max-md:justify-start max-md:w-full mt-4 md:mt-8 top-6 p-2 relative'>
							<img
								src='https://ambraee.com/cdn/shop/files/JBL00765.jpg?v=1721034145&width=1800'
								alt=''
								className='w-52 h-64 md:w-72 md:h-80 object-cover'
							/>
						</div>
						<div className='p-2 max-md:flex max-md:justify-end relative max-md:w-full'>
							<img
								src='https://ambraee.com/cdn/shop/files/JBL00279.jpg?v=1721034792&width=1800'
								alt=''
								className='w-52 h-64 md:w-72 md:h-80 object-cover'
							/>
						</div>
					</div>
				</div>
			</div>

			<footer className='w-full bg-neutral-200 p-4 flex flex-col items-center justify-center'>
				<p className='text-sm text-gray-700'>
					&copy; 2024 Rang e Vastra. All rights reserved.
				</p>
			</footer>
		</>
	);
}
