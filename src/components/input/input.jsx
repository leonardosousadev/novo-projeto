import styles from './input.module.css'

import PropTypes from 'prop-types'

export function Input({ label, ...props }) {
	return (
		<div className={styles.inputGroup}>
			<label htmlFor="email" className={styles.label}>
				{label}
			</label>
			<input className={styles.input} {...props} />
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string
}
