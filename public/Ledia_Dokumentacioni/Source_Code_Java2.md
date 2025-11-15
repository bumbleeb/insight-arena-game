# Source Code - Java 2 (Ledia)

## Detyrat e Ledia në Java 2

1. ✅ Instalimi dhe setup i Radix UI komponenteve (Button, Card, Progress)
2. ✅ Krijimi i src/components/ui/button.tsx me variants të ndryshme
3. ✅ Krijimi i src/components/ui/card.tsx për container components
4. ✅ Krijimi i src/components/ui/progress.tsx për progress bar
5. ✅ Implementimi i class-variance-authority për menaxhimin e variants

---

## 1. Button Component (src/components/ui/button.tsx)

Ledia ka krijuar komponentin Button me 6 variante dhe 4 madhësi duke përdorur `class-variance-authority`.

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### Button Variants:
- **default**: Primary purple gradient background
- **destructive**: Red for delete/dangerous actions
- **outline**: Transparent with border
- **secondary**: Blue background
- **ghost**: Transparent, shows background on hover
- **link**: Text link style with underline

### Button Sizes:
- **default**: h-10 (40px height)
- **sm**: h-9 (36px height)
- **lg**: h-11 (44px height)
- **icon**: h-10 w-10 (square button për ikona)

### Accessibility Features:
- Focus ring me keyboard navigation
- Disabled state me opacity-50
- ARIA-compatible me forwardRef
- SVG icon support built-in

---

## 2. Card Component (src/components/ui/card.tsx)

Ledia ka krijuar sistemin e Card me 5 sub-components për strukturë fleksibile.

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### Card Structure:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```

### Card Components:
1. **Card**: Main container me rounded corners dhe shadow
2. **CardHeader**: Header section me spacing vertical
3. **CardTitle**: H3 heading me font-semibold
4. **CardDescription**: Subtitle me muted color
5. **CardContent**: Body content me padding
6. **CardFooter**: Footer për actions (buttons, etc.)

### Design Tokens Used:
- `bg-card`: Background color nga design system
- `text-card-foreground`: Text color for card
- `text-muted-foreground`: Muted text for descriptions
- `shadow-sm`: Subtle shadow
- `rounded-lg`: 1rem border radius

---

## 3. Progress Component (src/components/ui/progress.tsx)

Ledia ka krijuar komponentin Progress për të treguar progress gjatë quiz.

```tsx
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

### Progress Features:
- **Radix UI Integration**: Accessible progress bar
- **Smooth Animation**: CSS transition për smooth updates
- **Percentage Based**: Value 0-100
- **Responsive**: w-full për full width
- **Themed**: Uses primary dhe secondary colors nga design system

### Usage Example:
```tsx
import { Progress } from "@/components/ui/progress";

// Show 60% progress
<Progress value={60} />

// With custom styling
<Progress value={75} className="h-2" />
```

### Animation:
- Transform-based animation për performance
- `transition-all` për smooth changes
- translateX për horizontal movement

---

## 4. Class Variance Authority (CVA)

Ledia ka implementuar CVA për menaxhimin e variants në Button component.

### CVA Setup:
```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes-here",  // Base classes
  {
    variants: {
      variant: { /* variant options */ },
      size: { /* size options */ }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
```

### Benefits:
1. **Type Safety**: TypeScript types për variants
2. **Reusability**: Variants mund të ripërdoren
3. **Maintainability**: Centralized styling logic
4. **Flexibility**: Easy to add new variants
5. **Performance**: Class concatenation optimized

### CVA në Button:
- 6 visual variants (default, destructive, outline, secondary, ghost, link)
- 4 size variants (default, sm, lg, icon)
- Default variants për consistency
- Type-safe props me VariantProps<typeof buttonVariants>

---

## 5. Radix UI Dependencies

### Installed Packages:
```json
{
  "@radix-ui/react-slot": "^1.2.3",
  "@radix-ui/react-progress": "^1.1.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

### Radix UI Primitives:
- **@radix-ui/react-slot**: Për asChild pattern në Button
- **@radix-ui/react-progress**: Accessible progress bar primitive
- **class-variance-authority**: Variant management
- **tailwind-merge**: Intelligent class merging
- **clsx**: Class name utility

---

## 6. Utilities (lib/utils.ts)

Helper function `cn()` për class management:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### cn() Function:
- Combines clsx për conditional classes
- Uses twMerge për conflict resolution
- Prevents duplicate Tailwind classes
- Ensures correct class precedence

---

## 7. Component Usage në BrainQuest

### Button Usage:
```tsx
// Primary action
<Button variant="default">Start Quiz</Button>

// Secondary action
<Button variant="secondary">Back</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Outline style
<Button variant="outline">Cancel</Button>
```

### Card Usage:
```tsx
// Category card
<Card>
  <CardHeader>
    <CardTitle>Science</CardTitle>
    <CardDescription>Test your knowledge</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

### Progress Usage:
```tsx
// Quiz progress
<Progress value={(currentQuestion / totalQuestions) * 100} />
```

---

## 8. Design System Integration

Të gjitha komponentët përdorin semantic tokens nga design system:

### Colors:
- `bg-primary`, `text-primary-foreground`
- `bg-secondary`, `text-secondary-foreground`
- `bg-destructive`, `text-destructive-foreground`
- `bg-card`, `text-card-foreground`
- `text-muted-foreground`

### Spacing:
- `p-6`: Standard padding
- `space-y-1.5`: Vertical spacing
- `gap-2`: Gap between elements

### Effects:
- `shadow-sm`: Subtle shadow
- `rounded-lg`, `rounded-md`, `rounded-full`
- `transition-colors`, `transition-all`

---

**Statusi:** ✅ Java 2 e plotësuar - Radix UI components, CVA implementation, dhe UI building blocks.