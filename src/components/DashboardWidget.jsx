import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/styles.css'
const DashboardWidget = (data) => {
    return (
        <section className='dashboard-widget-container' style={{ background: '#243325', width: '20%', padding: '20px', borderRadius: '12px' }}>
            <div className='dashboard-widget-header' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <FontAwesomeIcon icon={data.icon} width={'20px'} height={'20px'} />
                <span className='widget-title'>{data.title || 'NA'}</span>
            </div>
            <div className='dashboard-widget-value' style={{ display: 'flex', justifyContent: 'end' }}>
                <span className='widget-value'><h1>{data.value || 'NA'}</h1></span>
            </div>
        </section>
    )
}

export default DashboardWidget