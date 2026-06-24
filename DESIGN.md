# DESIGN.md — ModelX Design System

## Brand
- **Name:** ModelX
- **Tagline:** The marketplace for AI models
- **Network:** Solana
- **Aesthetic:** Tech Precision + Warm Minimal

## Color Tokens

### Backgrounds
| Token | Value | Use |
|-------|-------|-----|
| `bg` | `#0A0A0B` | Page background |
| `surface` | `#141416` | Cards, elevated surfaces |
| `surface-hover` | `#1A1A1D` | Card hover state |
| `surface-elevated` | `#1E1E22` | Modals, dropdowns |

### Foregrounds
| Token | Value | Use |
|-------|-------|-----|
| `fg` | `#E8E6E3` | Primary text |
| `fg-muted` | `#9B9B9B` | Secondary text |
| `fg-faint` | `#5C5C5C` | Disabled, tertiary |

### Brand
| Token | Value | Use |
|-------|-------|-----|
| `primary` | `#10B981` | CTA, links, accents |
| `primary-soft` | `#10B981` @ 12% | Badge backgrounds |
| `accent` | `#D4743C` | Secondary accent (warm) |

### Semantic
| Token | Value | Use |
|-------|-------|-----|
| `success` | `#34D399` | Positive states |
| `error` | `#F87171` | Errors, destructive |
| `warning` | `#FBBF24` | Warnings |

### Borders
| Token | Value | Use |
|-------|-------|-----|
| `border` | `#232326` | Default borders |
| `border-strong` | `#363639` | Emphasized borders |

## Typography

### Font Stack
| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Display | Space Grotesk | 700 | sans-serif |
| Heading | Space Grotesk | 600 | sans-serif |
| Body | Outfit | 400 | sans-serif |
| Body Semi | Outfit | 500 | sans-serif |
| Mono | JetBrains Mono | 400 | monospace |

### Type Scale (Fluid)
| Role | Min | Max | Weight | Line Height | Tracking |
|------|-----|-----|--------|-------------|----------|
| Display | 2.5rem | 4.5rem | 700 | 1.05 | -0.03em |
| H2 | 1.75rem | 2.5rem | 700 | 1.1 | -0.02em |
| H3 | 1.125rem | 1.5rem | 600 | 1.2 | -0.01em |
| Body Large | 1rem | 1.125rem | 400 | 1.6 | 0 |
| Body | 0.875rem | 0.9375rem | 400 | 1.6 | 0 |
| Small | 0.75rem | 0.8125rem | 400 | 1.5 | 0 |
| Micro | 0.6875rem | 0.6875rem | 500 | 1.4 | 0.05em |

## Spacing Scale
| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Tight internal gaps |
| `sm` | 8px | Component internals |
| `md` | 16px | Standard gaps |
| `lg` | 24px | Section element gaps |
| `xl` | 32px | Card padding |
| `2xl` | 48px | Section internal padding |
| `3xl` | 64px | Section gaps (between sections) |
| `4xl` | 96px | Hero top padding |
| `5xl` | 128px | Major section breaks |

## Border Radius
| Element | Radius |
|---------|--------|
| Button | 6px |
| Card | 10px |
| Container | 14px |
| Badge | 9999px (pill) |

## Shadows
| Level | Value | Use |
|-------|-------|-----|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` | Cards on hover |
| `shadow-glow` | `0 0 20px rgba(16,185,129,0.15)` | Primary glow |

## Layout
| Token | Value | Use |
|-------|-------|-----|
| `max-w` | 1080px | Content max width |
| `nav-height` | 56px | Fixed navbar |
| `section-y` | 96px | Default section padding Y |
| `section-y-lg` | 128px | Hero/CTA section padding Y |

## Animation
| Token | Duration | Easing | Use |
|-------|----------|--------|-----|
| `fast` | 150ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Micro interactions |
| `normal` | 250ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Page transitions |
| `slow` | 400ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Large element reveals |

## Anti-Slop Rules (Enforced)
1. No `transition: all` — name properties
2. No `ease-in-out` — use custom curves
3. No `rounded-lg shadow-md` on everything — vary radii
4. No Inter/Roboto — use Space Grotesk + Outfit
5. No pure #000 or #FFF — use off-black/off-white
6. No `repeat(3, 1fr)` everywhere — use asymmetric grids
7. Max 5 hues in palette
8. `prefers-reduced-motion` mandatory
9. Custom `::selection` color
10. Custom scrollbar styling
