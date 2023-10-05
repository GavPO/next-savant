import { UserButton } from '@clerk/nextjs'

export default function Dashboard() {
    return (
        <>
            <div>DASHBOARD (Protected)</div>
            <UserButton />
        </>
    )
}
