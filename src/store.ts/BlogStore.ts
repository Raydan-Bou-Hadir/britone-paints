import { create } from 'zustand';
import type { BlogStoreState } from './BlogInterface';

export const useBlogStore = create<BlogStoreState>(() => ({
  blogGroup: [
    {
      id: 1,
      blogTitle: 'Choosing the Right Paint for Your Home',
      blogSubTitle:
        'Learn how to select the perfect paint type and finish for every room in your house.',
      blogImage: 'src/assets/blogs/blog1.jpg',
      blogDate: 'March 15, 2024',
      blogAuther: 'John Smith',
      blogDescription: `Selecting the right paint for your home can be overwhelming with so many options available. Understanding the different types of paint and their applications is crucial for achieving the best results.

                            For high-traffic areas like hallways and children's rooms, we recommend using semi-gloss or satin finishes. These finishes are more durable and easier to clean, making them perfect for areas that see a lot of activity.

                            Bedrooms and living rooms benefit from matte or eggshell finishes, which provide a soft, elegant look while hiding minor wall imperfections. These finishes create a warm, inviting atmosphere perfect for relaxation.

                            Kitchens and bathrooms require special consideration due to moisture and humidity. Semi-gloss or high-gloss paints work best in these spaces as they resist moisture and are easy to wipe clean.

                            Don't forget about the importance of primer! A good quality primer ensures better paint adhesion, provides a uniform surface, and can even help cover dark colors or stains.
            `,
    },
    {
      id: 1,
      blogTitle: 'The Science Behind Long-Lasting Paint',
      blogSubTitle:
        'Discover what makes Britone paints stand the test of time in harsh climates.',
      blogImage: 'src/assets/blogs/blog2.jpg',
      blogDate: 'March 10, 2024',
      blogAuther: 'John Smith',
      blogDescription: `At Britone Paints, we've spent over 25 years perfecting our formulations to withstand the challenging West African climate. Our research and development team works tirelessly to create paints that resist fading, cracking, and peeling.

                            The secret lies in our advanced resin technology. We use high-quality acrylic resins that form a flexible, breathable film on surfaces. This allows the paint to expand and contract with temperature changes without cracking.

                            UV resistance is another critical factor in paint longevity. Our paints contain specialized UV absorbers and stabilizers that protect the color pigments from sun damage, ensuring your walls maintain their vibrant appearance for years.

                            We also incorporate anti-fungal and anti-algae additives in our exterior paints. These prevent the growth of mold and mildew, which is especially important in humid tropical climates.

                            Quality control is paramount at Britone. Every batch undergoes rigorous testing including accelerated weathering tests, adhesion tests, and color consistency checks to ensure you receive only the best products.
            `,
    },
    {
      id: 1,
      blogTitle: 'Color Trends for 2024',
      blogSubTitle:
        'Explore the latest color palettes and design trends shaping modern spaces.',
      blogImage: 'src/assets/blogs/blog3.jpg',
      blogDate: 'March 5, 2024',
      blogAuther: 'John Smith',
      blogDescription: `2024 brings exciting new color trends that reflect our desire for comfort, connection with nature, and personal expression. This year's palette is all about creating spaces that feel both contemporary and timeless.

                                Earthy tones continue to dominate, with warm terracottas, soft clay colors, and rich ochres leading the way. These colors bring warmth and grounding energy to any space, creating a cozy and inviting atmosphere.

                                Sage green and other muted greens remain popular, reflecting our ongoing connection with nature. These colors work beautifully in bedrooms and living spaces, promoting relaxation and tranquility.

                                Bold accent colors are making a comeback! Deep navy blues, burgundy, and forest greens are being used to create dramatic feature walls and add personality to neutral spaces.

                                Don't be afraid to experiment with color! Our color consultation service can help you find the perfect palette for your space. Visit any Britone showroom to explore our extensive color chart and get expert advice.
            `,
    },
  ],
}));
