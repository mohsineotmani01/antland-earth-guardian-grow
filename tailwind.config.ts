import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				orange: {
					DEFAULT: 'hsl(var(--orange))',
					foreground: 'hsl(var(--orange-foreground))',
					'50': '#fff8f1',
					'100': '#ffeee0',
					'200': '#ffd9b8',
					'300': '#ffbd86',
					'400': '#ff9e52',
					'500': '#F97316',
					'600': '#ed5f13',
					'700': '#c4450e',
					'800': '#9c3711',
					'900': '#7e2f13',
					'950': '#431606',
				},
				earth: {
					'50': '#f6f7f1',
					'100': '#e7ebdb',
					'200': '#d2dbb8',
					'300': '#b7c68c',
					'400': '#9caf65',
					'500': '#829345',
					'600': '#667437',
					'700': '#4e592d',
					'800': '#414a29',
					'900': '#323824',
					'950': '#191e10',
				},
				soil: {
					'50': '#f9f6f1',
					'100': '#f0e8db',
					'200': '#e2d0b8',
					'300': '#d0b28c',
					'400': '#c19a6c',
					'500': '#b68557',
					'600': '#a6714e',
					'700': '#8a5a43',
					'800': '#704a3c',
					'900': '#5c3e34',
					'950': '#311f1a',
				},
				leaf: {
					'50': '#f0fdf4',
					'100': '#dcfce7',
					'200': '#bbf7d0',
					'300': '#86efac',
					'400': '#4ade80',
					'500': '#22c55e',
					'600': '#16a34a',
					'700': '#15803d',
					'800': '#166534',
					'900': '#14532d',
					'950': '#052e16',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'subtle-rotate': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'slide-in': {
					from: {
						transform: 'translateX(-50px)',
						opacity: '0'
					},
					to: {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					from: {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					to: {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse': 'pulse 3s infinite ease-in-out',
				'bounce-slow': 'bounce-slow 3s infinite ease-in-out',
				'subtle-rotate': 'subtle-rotate 120s linear infinite',
				'slide-in': 'slide-in 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.8s ease-out forwards',
				'shine': 'shine 8s ease-in-out infinite'
			},
			backgroundImage: {
				'leaf-pattern': "url('/leaf-pattern.svg')",
				'soil-texture': "url('/soil-texture.svg')",
				'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
