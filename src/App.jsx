import styles from './App.module.css'


function App() {
	return (
		<main className={styles.main}>
			<section className={`${styles.cardRating}`}>
				<header>
					<span className={styles.icon}>
						<img src='/assets/images/icon-star.svg' alt='' />
					</span>
					<h2>How did we do?</h2>
				</header>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
				<form>
					<div className={styles.containerRating}>
						<div className={styles.formGroup}>
							<input id='rating1' name='rating' type='radio' />
							<label htmlFor='rating1'>1</label>
						</div>
						<div className={styles.formGroup}>
							<input id='rating2' name='rating' type='radio' />
							<label htmlFor='rating2'>2</label>
						</div>
						<div className={styles.formGroup}>
							<input id='rating3' name='rating' type='radio' />
							<label htmlFor='rating3'>3</label>
						</div>
						<div className={styles.formGroup}>
							<input id='rating4' name='rating' type='radio' />
							<label htmlFor='rating4'>4</label>
						</div>
						<div className={styles.formGroup}>
							<input id='rating5' name='rating' type='radio' />
							<label htmlFor='rating5'>5</label>
						</div>
					</div>
					<button className={styles.btnSubmit} type='submit'>SUBMIT</button>
				</form>
			</section>
			<section className={`${styles.cardThanks}`}>
				<header>
					<img src='/assets/images/illustration-thank-you.svg' alt='' />
					<p>You selected 4 out of 5</p>
					<h2>Thank you!</h2>
				</header>
				<p className={styles.cardMessage}>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</section>
		</main>
	)
}

export default App
