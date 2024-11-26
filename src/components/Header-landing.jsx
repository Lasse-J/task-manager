import { HomeIcon, File, UsersRound, Pencil } from 'lucide-react'
import Link from 'next/link'

import { NavButton } from '@/components/NavButton'
import { ModeToggle } from '@/components/ModeToggle'

export function Header() {
	return (
		<header className="animate-slide bg-background h-12 p-2 sticky top-0 z-20">
			<div className="flex h-8 items-center justify-between w-full">
				<div className="flex items-center gap-2">
				
					<NavButton href="/home" label="Home" icon={Pencil} />

					<Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
						<h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
							Your Favorite Task Manager - Landing only
						</h1>
					</Link>
				</div>
				<div className="flex items-center">
				
					<ModeToggle />

				</div>
			</div>
		</header>
	)
}
