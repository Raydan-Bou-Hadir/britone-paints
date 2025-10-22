export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-12'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Logo */}
          <div className='flex items-center gap-4'>
            <img
              src='/images/logo.png'
              alt='Britone Paints'
              width={150}
              height={50}
              className='h-10 w-auto brightness-0 invert'
            />
          </div>

          {/* Copyright */}
          <div className='text-center md:text-left'>
            <p className='text-sm'>
              © {new Date().getFullYear()} National Paint Industries. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
