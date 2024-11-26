import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export default function Landing() {
  return (
    <div className="bg-black bg-wallpaper-steampunk-chrome bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/85 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Your Favorite <br />Task Manager</h1>
          
          <address className="text-xl">
            "All we have to decide is<br/> what to do with the time<br/> that is given to us."<br />
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
