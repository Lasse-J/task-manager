'use client'

import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'

export default function Landing() {
  const { theme } = useTheme()

  const panelStyles = theme === 'dark'
    ? 'bg-black/85 text-white'
    : 'bg-white/95 text-black'

  return (
    <div className="bg-black bg-wallpaper-steampunk-chrome bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className={`panel flex flex-col gap-6 p-12 rounded-xl w-4/5 sm:max-w-96 mx-auto sm:text-2xl ${panelStyles}`}>
          <h1 className="text-4xl font-bold">Your Favorite <br />Task Manager</h1>
          
          <address className="text-xl">
            All we have to decide is<br/> what to do with the time<br/> that is given to us.<br />
            -Gandalf
          </address>

          <p className="login">
            <Button asChild>
              <LoginLink>Login</LoginLink>
            </Button>
          </p>
          <p className="register">
            <Button asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </p>
        </div>
      </main>
    </div>
  );
}
