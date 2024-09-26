'use client';

import { Countdown } from './Coutdown';

export default function CommingSoon() {
	const targetDate = new Date('2024-10-10T23:59:59').getTime();

	return (
		<div className='flex flex-col md:flex-row w-full min-h-screen'>
			<div className='hidden md:block relative w-full md:w-1/2 h-auto'>
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
			</div>

			{/* Right side - Countdown */}
			<div className='relative w-full md:w-1/2 bg-[#eeeded] h-screen md:h-auto p-8 flex flex-col justify-center'>
				<div className='flex flex-col items-center justify-center h-full gap-8'>
					<h2 className='text-8xl text-black w-full text-center bonheur-royale-regular'>
						Coming Soon
					</h2>

					<div className='flex justify-center items-center bg-transparent'>
						<div className='flex gap-5 max-w-4xl w-full p-5'>
							<div className='mt-8 p-2'>
								<img
									src='https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/09/82563800_469180497323493_9142563483056961770_n1.jpg'
									alt=''
									className='w-72 h-80 object-cover'
								/>
							</div>
							<div className='flex-[1.2] p-2'>
								<img
									src='https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/09/163285971_293982685477412_4816726329.jpg'
									alt=''
									className='w-72 h-80 object-cover'
								/>
							</div>
						</div>
					</div>

					<Countdown />
				</div>
			</div>
		</div>
	);
}
