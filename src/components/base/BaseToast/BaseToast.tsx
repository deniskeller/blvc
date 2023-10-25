//@ts-nocheck
import React from 'react';
import { ToastType, toast as toastOBj, useToaster } from 'react-hot-toast';
import styles from './BaseToast.module.scss';

const BaseToast: React.FC = () => {
	const { toasts, handlers } = useToaster();
	const { startPause, endPause, calculateOffset, updateHeight } = handlers;

	const typeIcon = (type: ToastType) => {
		switch (type) {
			case 'success':
				return (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 44 44'
							fill='none'
							className={styles.Icon}
						>
							<path
								d='M16.5 22L20.1667 25.6667L27.5 18.3333M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22Z'
								stroke='#1B2454'
								strokeOpacity='0.85'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className={`${styles.BaseToast} ${
				toasts[0]?.className == 'dashboard' ? styles.BaseToastApp : ''
			}`}
			onMouseEnter={startPause}
			onMouseLeave={endPause}
		>
			{toasts.map((toast) => {
				const offset = calculateOffset(toast, {
					reverseOrder: true,
					gutter: 8,
				});

				const ref = (el) => {
					if (el && typeof toast.height !== 'number') {
						const height = el.getBoundingClientRect().height;
						updateHeight(toast.id, height);
					}
				};

				return (
					<div
						className={styles.Wrapper}
						ref={ref}
						key={toast.id}
						style={{
							opacity: toast.visible ? 1 : 0,
							transform: `translateY(-${offset}px)`,
						}}
						{...toast.ariaProps}
					>
						<div className={styles.BaseToast_Toast}>
							<div className={styles.BaseToast_Content}>
								{toast.className == 'dashboard' ? typeIcon(toast.type) : null}

								<div className={styles.Text}>
									<p>{toast.message}</p>
								</div>
							</div>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								className={styles.BaseToast_Close}
								onClick={() => {
									toast.visible = false;
									toastOBj.dismiss(toast.id);
								}}
							>
								<path
									d='M6 18L18 6M6 6L18 18'
									stroke='#5F41D4'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default BaseToast;
