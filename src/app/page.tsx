'use client';

import { Countdown } from './Coutdown';

export default function CommingSoon() {
	return (
		<>
			<div className='sticky shadow-md top-0 left-0 right-0 w-full h-11 flex justify-center z-[9999] items-center bg-[#f2fbbc]'>
				<p className='text-base font-playfair-display font-extralight text-black w-full text-center'>
					Something great is on the way
				</p>
			</div>
			<div className='relative flex flex-col lg:flex-row w-full min-h-screen'>
				<div className='md:block relative w-full lg:w-1/2 h-auto md:h-screen'>
					<img
						src={
							'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/09/49993871_236305853959039_652836270.jpg'
						}
						alt='img'
						className='w-full h-auto object-cover'
						style={{ maxHeight: '100vh' }}
					/>
					<p className='text-2xl text-gray-900 absolute top-4 left-8 font-medium'>
						<img src='/assets/images/logo.svg' alt='' className='w-32 h-32' />
					</p>
					<div className='absolute md:hidden bottom-6 left-0 right-0 z-50 flex justify-center '>
						<div className='flex gap-4 bg-[#ccd7de] p-2 rounded'>
							<img
								src='https://static.wixstatic.com/media/11062b_47c9543e20c94b7ca5c97e361e1b2db3~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_47c9543e20c94b7ca5c97e361e1b2db3~mv2.png'
								alt=''
								className='w-6 h-6'
							/>
							<img
								src='https://static.wixstatic.com/media/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png'
								alt=''
								className='w-6 h-6'
							/>
							<img
								src='https://static.wixstatic.com/media/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png'
								alt=''
								className='w-6 h-6'
							/>
						</div>
					</div>
				</div>

				<div className='hidden lg:flex absolute top-0 bottom-0 left-4 z-50 flex-col justify-center gap-4'>
					<img
						src='https://static.wixstatic.com/media/11062b_47c9543e20c94b7ca5c97e361e1b2db3~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_47c9543e20c94b7ca5c97e361e1b2db3~mv2.png'
						alt=''
						className='w-6 h-6'
					/>
					<img
						src='https://static.wixstatic.com/media/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png'
						alt=''
						className='w-6 h-6'
					/>
					<img
						src='https://static.wixstatic.com/media/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png'
						alt=''
						className='w-6 h-6'
					/>
				</div>

				<div className='relative w-full lg:w-1/2 bg-[#eeeded] min-h-screen p-4 md:p-8 flex flex-col justify-center items-center gap-4 md:gap-8 max-md:pb-20 pt-10'>
					<h2 className='text-6xl md:text-8xl text-black w-full text-center bonheur-royale-regular'>
						Coming Soon
					</h2>

					<div className='flex flex-col items-center  md:justify-center md:flex-row gap-5 md:max-w-4xl w-full md:p-5 pb-8'>
						<div className='max-sm:flex max-sm:justify-start max-sm:w-full mt-4 md:mt-8 p-2'>
							<img
								src='https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/09/82563800_469180497323493_9142563483056961770_n1.jpg'
								alt=''
								className='w-52 h-64 md:w-72 md:h-80 object-cover'
							/>
						</div>
						<div className='p-2 max-sm:flex max-sm:justify-end relative max-sm:w-full'>
							<img
								src='https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/09/163285971_293982685477412_4816726329.jpg'
								alt=''
								className='w-52 h-64 md:w-72 md:h-80 object-cover'
							/>
						</div>
					</div>

					<Countdown />
				</div>
			</div>
		</>
	);
}
