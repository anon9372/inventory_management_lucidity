import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX, faDollarSign, faList } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const iconsMap = {
	'Total Products': faCartShopping,
	'Out of Stock': faX,
	'Total Value': faDollarSign,
	'Total Categories': faList,
};

const DashboardWidget = () => {
	const metrics = useSelector((state) => state.metrics || []);
	return (
		<section className='dashboard-widget-container'>
			{metrics.map((metric, index) => (
				<section
					key={index}
					style={{
						background: '#243325',
						width: '20%',
						padding: '20px',
						borderRadius: '12px',
						margin: '10px',
					}}
				>
					<div
						className="dashboard-widget-header"
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '12px',
						}}
					>
						<FontAwesomeIcon
							icon={iconsMap[metric.title] || faX}
							style={{ fontSize: '20px', color: 'white' }}
						/>
						<span className="widget-title" style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
							{metric.title || 'NA'}
						</span>
					</div>
					<div
						className="dashboard-widget-value"
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<h1 style={{ color: '#7B8845', margin: 0 }}>{metric.value || 'NA'}</h1>
					</div>
				</section>
			))}
		</section>
	);
};

export default DashboardWidget;
