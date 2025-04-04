import Link from 'components/shared/link';
import Logo from "svgs/logo.inline.svg"
import Button from '../button';

function Header() {
  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-20">
        <div className='container h-full'>
          <div className='flex justify-between items-center h-full'>
            <Link href='/'>
              <Logo className="w-[173px] h-[48px]"/>
            </Link>
            <nav
              className="flex h-full items-center justify-between px-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              <ul className='flex gap-12 items-center'>
                <li>
                  <Link
                    href="#"
                    className="transform transition-transform duration-200 ease-in-out"
                    size="md"
                    theme="white-filled"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transform transition-transform duration-200 ease-in-out"
                    size="md"
                    theme="white-filled"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transform transition-transform duration-200 ease-in-out"
                    size="md"
                    theme="white-filled"
                  >
                    Why DevOptima
                  </Link>
                </li>
              </ul>
            </nav>
            <Button size='md' theme='white-primary' href='/' transition>Get started</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
