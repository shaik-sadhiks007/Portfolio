import React from 'react'
import { AttendanceCalendar } from './Attendance'
import { LeaveManagement } from './LeaveManagement'
import { PayrollSystem } from './PayrollSystem'
import { SalarySlip } from './SalarySlip'
import ProjectShowcase from './ProjectShowcase'
import Header from '../components/Header'

function MyChamp() {
    return (
        <>
            <Header />
            <ProjectShowcase />
            {/* <AttendanceCalendar />
            <LeaveManagement />
            <PayrollSystem />
            <SalarySlip /> */}
        </>
    )
}

export default MyChamp
