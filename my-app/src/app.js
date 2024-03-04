import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const onNext = () => {
		setActiveIndex(activeIndex + 1);
	};
	const onPerv = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};
	const onStart = () => {
		setActiveIndex(0);
	};
	const isFirtsStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ title, id }, index) => (
							<li
								className={
									styles['steps-item'] +
									(index === activeIndex ? ` ${styles.active}` : '') +
									(index < activeIndex ? ` ${styles.done}` : '')
								}
								key={id}
							>
								<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button + (isFirtsStep ? ` ${styles.disabled}` : '')} onClick={onPerv}>
							Назад
						</button>
						{!isLastStep ? (
							<button className={styles.button} onClick={onNext}>
								Далее
							</button>
						) : (
							<button className={styles.button} onClick={onStart}>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
