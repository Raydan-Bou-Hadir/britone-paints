import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export function ContactUs() {
  return (
    <section id='contact-us' className='py-24 bg-background'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='navy-blue text-4xl md:text-5xl font-bold mb-4 text-balance'>
            Get In Touch
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
            We're here to help with all your paint needs
          </p>
        </div>

        {/* Two-column layout with equal height */}
        <div className='grid lg:grid-cols-[1fr_2fr] gap-12 max-w-6xl mx-auto items-stretch'>
          {/* Left Section: Contact Info */}
          <div className='flex flex-col space-y-6 h-full'>
            {/* Phone Card */}
            <Card className='flex-1'>
              <CardContent className='p-8'>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary/10 p-3 rounded-lg'>
                    <Phone className='h-6 w-6 navy-blue' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg navy-blue'>Phone</h3>
                    <a
                      href='tel:00231886526526'
                      className='text-primary hover:underline text-base'
                    >
                      00231 886 526526
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className='flex-1'>
              <CardContent className='p-8'>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary/10 p-3 rounded-lg'>
                    <Mail className='h-6 w-6 navy-blue' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2 navy-blue'>
                      Email
                    </h3>
                    <a
                      href='mailto:info@britonepaints.com'
                      className='text-primary hover:underline text-base'
                    >
                      info@britonepaints.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Follow Us Card */}
            <Card className='flex-1'>
              <CardContent className='p-8'>
                <h3 className='font-semibold text-lg mb-4 navy-blue'>
                  Follow Us
                </h3>
                <div className='flex gap-4'>
                  <Button
                    size='md'
                    variant='outline'
                    aria-label='Facebook'
                    className='bg-transparent hover:bg-primary hover:text-white  hover:cursor-pointer'
                  >
                    <a
                      href='https://www.facebook.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Facebook className='h-5 w-5' />
                    </a>
                  </Button>

                  <Button
                    size='md'
                    variant='outline'
                    aria-label='Instagram'
                    className='bg-transparent hover:bg-primary hover:text-white  hover:cursor-pointer'
                  >
                    <a
                      href='https://www.instagram.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Instagram className='h-5 w-5' />
                    </a>
                  </Button>

                  <Button
                    size='md'
                    variant='outline'
                    aria-label='LinkedIn'
                    className='bg-transparent hover:bg-primary hover:text-white  hover:cursor-pointer'
                  >
                    <a
                      href='https://www.linkedin.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Linkedin className='h-5 w-5' />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section: Google Map */}
          <Card className='overflow-hidden h-full'>
            <CardContent className='p-0 h-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d-10.775!3d6.339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMjAuNyJOIDEwwrA0NiczMC4zIlc!5e0!3m2!1sen!2s!4v1234567890'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Britone Paints Location'
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
