# AI Video Generator

A modern, AI-powered video creation platform built with Next.js 15, TypeScript, and Supabase.

## Features

- 🎬 **AI-Powered Video Creation** - Transform text prompts into stunning videos
- 🎨 **Image Animation** - Bring static images to life with smooth animations
- 🎯 **Style Transfer** - Apply artistic styles and visual effects
- ⚡ **Fast Generation** - Generate high-quality videos in minutes
- 🔗 **Easy Sharing** - Share creations across all platforms
- 🌐 **Multi-language Support** - English and Bosnian translations
- 📱 **Responsive Design** - Works on all devices
- 🔐 **Authentication** - Secure login with Supabase Auth

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:zullum/aivideogen.git
   cd aivideogen
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your Supabase credentials:
   - Get your Supabase URL and Anon Key from your Supabase project settings
   - Set up OAuth providers in Supabase dashboard if needed

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript checks

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   ├── i18n/                  # Internationalization
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript types
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This project can also be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.