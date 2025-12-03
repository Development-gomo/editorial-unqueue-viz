import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90",
        outline: "border-2 border-foreground/20 bg-transparent text-foreground rounded-full hover:bg-foreground hover:text-background hover:border-foreground",
        secondary: "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent text-accent-foreground rounded-full hover:shadow-glow-accent hover:-translate-y-1 hover:shadow-xl text-base font-bold",
        magenta: "bg-primary text-primary-foreground rounded-full hover:shadow-glow hover:-translate-y-1 hover:shadow-xl",
        minimal: "bg-transparent text-foreground hover:text-primary px-0 rounded-none relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        glass: "bg-card/10 backdrop-blur-md text-foreground border border-foreground/10 rounded-full hover:bg-card/20 hover:border-foreground/20",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
