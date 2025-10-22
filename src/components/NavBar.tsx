import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'products', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // List of small About-Us divs
    const smallDivs = ['who-we-are', 'our-mission', 'our-vision'];

    element.scrollIntoView({
      behavior: 'smooth',
      block: smallDivs.includes(id) ? 'center' : 'start', // center small divs, top for others
    });

    setIsMobileMenuOpen(false); // close mobile menu
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent',
      )}
    >
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className='flex items-center cursor-pointer'
          >
            <img
              src='/src/assets/logos/britone-paints-logo.png'
              alt='Britone Paints Logo'
              className='h-12 w-auto transition-transform duration-300 hover:scale-105'
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            <button
              onClick={() => scrollToSection('home')}
              className={cn(
                'text-gray-800 hover:text-red-700 transition-colors font-medium',
                activeSection === 'home' && 'text-red-700 font-semibold',
              )}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className='relative group'>
              <button
                className={cn(
                  'flex items-center gap-1 text-gray-800 hover:text-red-700 transition-colors font-medium',
                  activeSection === 'about' && 'text-red-700 font-semibold',
                )}
              >
                About-Us <ChevronDown className='w-4 h-4' />
              </button>

              {/* Dropdown Menu */}
              <div
                className='
                        absolute top-full left-0 mt-2 w-60  /* increased width */
                        bg-white border border-gray-200 rounded-lg shadow-lg
                        opacity-0 invisible group-hover:visible group-hover:opacity-100
                        transition-all duration-300 ease-in-out
                        translate-y-2 group-hover:translate-y-0
                    '
              >
                <button
                  onClick={() => scrollToSection('who-we-are')}
                  className='block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left'
                >
                  <div className='text-sm font-medium'>Who We Are</div>
                </button>
                <button
                  onClick={() => scrollToSection('our-mission')}
                  className='block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left'
                >
                  <div className='text-sm font-medium'>Our Mission</div>
                </button>
                <button
                  onClick={() => scrollToSection('our-vision')}
                  className='block select-none rounded-md px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left'
                >
                  <div className='text-sm font-medium'>Our Vision</div>
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('products')}
              className={cn(
                'text-gray-800 hover:text-red-700 transition-colors font-medium',
                activeSection === 'products' && 'text-red-700 font-semibold',
              )}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className={cn(
                'text-gray-800 hover:text-red-700 transition-colors font-medium',
                activeSection === 'blog' && 'text-red-700 font-semibold',
              )}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={cn(
                'text-gray-800 hover:text-red-700 transition-colors font-medium',
                activeSection === 'contact' && 'text-red-700 font-semibold',
              )}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='h-6 w-6 text-gray-800' />
            ) : (
              <Menu className='h-6 w-6 text-gray-800' />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className='lg:hidden py-4 border-t border-gray-200'>
            <div className='flex flex-col gap-2'>
              <button
                onClick={() => scrollToSection('home')}
                className={cn(
                  'text-left pl-4 py-2 text-gray-800 hover:text-red-700 transition-colors font-medium',
                  activeSection === 'home' && 'text-red-700 font-semibold',
                )}
              >
                Home
              </button>

              {/* Mobile About */}
              <div className='flex flex-col gap-1 pl-4'>
                <button
                  className='text-left py-2 text-gray-800 hover:text-red-700 font-medium'
                  onClick={() => scrollToSection('who-we-are')}
                >
                  Who We Are
                </button>
                <button
                  className='text-left py-2 text-gray-800 hover:text-red-700 font-medium'
                  onClick={() => scrollToSection('our-mission')}
                >
                  Our Mission
                </button>
                <button
                  className='text-left py-2 text-gray-800 hover:text-red-700 font-medium'
                  onClick={() => scrollToSection('our-vision')}
                >
                  Our Vision
                </button>
              </div>

              <button
                onClick={() => scrollToSection('products')}
                className={cn(
                  'text-left pl-4 py-2 text-gray-800 hover:text-red-700 transition-colors font-medium',
                  activeSection === 'products' && 'text-red-700 font-semibold',
                )}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className={cn(
                  'text-left pl-4 py-2 text-gray-800 hover:text-red-700 transition-colors font-medium',
                  activeSection === 'blog' && 'text-red-700 font-semibold',
                )}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={cn(
                  'text-left pl-4 py-2 text-gray-800 hover:text-red-700 transition-colors font-medium',
                  activeSection === 'contact' && 'text-red-700 font-semibold',
                )}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
