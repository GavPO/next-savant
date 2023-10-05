import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Landing() {
    return (
        <>
            <div>LANDING (Unprotected)</div>
            <div className='flex flex-col' >
                <Link href="/sign-in">
                    <Button>LOGIN</Button>
                </Link>
                <Link href="sign-up">
                    <Button>REGISTER</Button>
                </Link>
            </div>
        </>
    )
}
